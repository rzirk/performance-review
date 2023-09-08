// Import stylesheets
import "./MyChart.css";
import {Line} from "react-chartjs-2";
import { Chart } from 'chart.js';
import { LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const containerStyle = {
    height: '300px',           // Verwendet den gesamten Viewport in der Höhe
    display: 'flex',
    justifyContent: 'center'
};

type MyChartProps = {
    counter: number;
};
function MyChart({ counter }: MyChartProps) {
    const data = {
        labels: ['Test', 'Test2'],
        datasets: [
            {
                label: 'Verkaufszahlen',
                data: [...Array(2)].map(() => counter),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1
            }
        ]
    };

    return <div style={containerStyle}>
        <Line data={data} options={options} />
    </div>
}


export default MyChart;
