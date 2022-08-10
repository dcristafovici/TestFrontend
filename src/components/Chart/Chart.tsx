import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { chartData } from "./ChartData";
import { ChartStyled } from "./ChartStyled";


ChartJS.register(ArcElement, Tooltip, Legend);

const Chart:React.FC = () => (
  <ChartStyled>
    <Pie
      data={chartData}
    />
  </ChartStyled>
)
export default Chart;