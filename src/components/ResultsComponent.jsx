import React from 'react';
import Plot from 'react-plotly.js';
import { useState, useEffect } from "react";

function ResultsComponent({ data }) {
    // Exclude total_monthly_cost from the labels and values arrays
    const labels = Object.keys(data).filter(key => key !== "total_monthly_cost");
    const values = labels.map(label => data[label]);

    const formattedLabels = labels.map((label, index) => `${label.replace(/_/g, ' ')}: $${values[index]}`);
    const colors = ['#FF6F61', '#C44D51', '#C70039', '#900C3F', '#581845'];
    
    const [pull, setPull] = useState(new Array(values.length).fill(0));

    const handleHover = (data) => {
        const newPull = new Array(values.length).fill(0);
        newPull[data.points[0].pointNumber] = 0.1;
        setPull(newPull);
    };

    const handleUnhover = () => {
        setPull(new Array(values.length).fill(0));
    };

    const trace = {
        type: 'pie',
        hole: 0.4, // This makes it a donut chart
        labels: formattedLabels,
        values: values,
        textinfo: 'label+percent',
        insidetextorientation: 'radial',
        marker: {
            colors: colors.slice(0, values.length)
        },
        pull: pull
        
    };

    const layout = {
        // title: 'Estimated Expenditure Donut Diagram',
        font: {
            size: 10,
            color: 'white',
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0.2)',
        width: 2 * 450,  // Assuming the original width was 450
        height: 1.5 * 450
    };

    

    return (
        <div>
            <div className="results-panel">
                <p className="text-center">
                    <br/>
                    <span className="text-gradient text-2xl">Your estimated cost of living in Victoria is </span>
                    <br /><span role="img" aria-label="dollar bill icon" style={{ fontSize: '1.5em', color: 'initial' }}>💵</span>
                    <span className="text-gradient text-3xl font-bold"> ${data.total_monthly_cost}</span>
                </p>
            </div>
            <Plot data={[trace]} layout={layout} />
        </div>
    );
}

export default ResultsComponent;
