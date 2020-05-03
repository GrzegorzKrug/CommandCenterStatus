import React, { Component } from 'react';
// import { Chart } from 'react-charts';
import { LineChart, PieChart } from 'react-chartkick'
import "./graphs.css"

import "chart.js"


// function MyChart() {
//     const data = React.useMemo(
//         () => [
//             {
//                 label: 'Series 1',
//                 data: [{ x: 1, y: 11 }, { x: 2, y: 12 }, { x: 3, y: 13 }]
//             },
//             {
//                 label: 'Series 2',
//                 data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
//             },
//             {
//                 label: 'Series 3',
//                 data: [{ x: 1, y: 9 }, { x: 2, y: 8 }, { x: 3, y: 7 }]
//             }
//         ],
//         []
//     )

//     const axes = React.useMemo(
//         () => [
//             { primary: true, type: 'linear', position: 'bottom' },
//             { type: 'linear', position: 'left' }
//         ],
//         []
//     )

//     return (
//         <div
//             style={{
//                 width: '400px',
//                 height: '300px'
//             }}
//         >
//             <Chart data={data} axes={axes} />
//         </div>
//     )
// }
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
