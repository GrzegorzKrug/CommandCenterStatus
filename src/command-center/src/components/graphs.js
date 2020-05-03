import React, { Component } from 'react';
// import { Chart } from 'react-charts';
import { LineChart } from 'react-chartkick'
import "./graphs.css"

import "chart.js"


function MyKickChart() {
    const my_data = [
        { name: "Line-1", color: "#4DE", data: Getdata(-0.01, 0.4, 2, 0, 10) },
        { name: "Line-2", color: "#03B", data: Getdata(0.01, -1, 0.5, 1, 10) }
    ]


    console.log("My data", my_data)
    return (
        <LineChart data={my_data} />
    )
}

function Getdata(a3, a2, a1, a0, x) {
    var new_vect = {}
    for (let i = 0; i < x; i++) {
        // i = i / 100

        new_vect[i] = i * a1 + a0 + i * i * i * a3
    }

    return new_vect
}

export class LineGraph extends Component {
    render() {
        return (
            <div className="first-graph">
                <MyKickChart />

            </div>
        )
    }
}
