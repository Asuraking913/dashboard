import { Line } from "react-chartjs-2"
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"

ChartJs.register(
    CategoryScale, 
    LinearScale, 
    PointElement,
    LineElement, 
    Title,
    Tooltip,
    Legend
)

const chartData = {
    labels: [
        '',
        '',
        '',
        '',
        '', 
        '' 
    ], 
    datasets: [
        {
            label: "Steps",
            data: [2000, 5000, 8000, 3000, 1222, 5000], 
            borderColor: "bg-[--accent]"
        }
    ]
}

function Graph() {
    const options = {}
  return <Line options={options} data={chartData}/>
}

export default Graph