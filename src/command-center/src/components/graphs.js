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
    // const data = React.memo(
    //     () =>
    //         [{ "0": 1 }, { "1": 1 }],
    //     []

    // )
    return (
        <LineChart data={[
            { name: "Line1", data: { "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 3, "6": 2, "7": 4, "8": 5, "9": 6, "10": 4 } },
            { name: "Line2", data: { "0": 0, "1": -1, "2": -2, "3": -3, "4": -1, "5": 0, "6": 2, "7": 1, } }
        ]} />
    )
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
