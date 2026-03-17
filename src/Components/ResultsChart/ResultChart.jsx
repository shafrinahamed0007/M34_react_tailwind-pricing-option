import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Abir Hasan", math: 85, english: 78, science: 92 },
  { id: 2, name: "Sultana Razia", math: 92, english: 88, science: 85 },
  { id: 3, name: "Tanvir Ahmed", math: 74, english: 82, science: 79 },
  { id: 4, name: "Nusrat Jahan", math: 95, english: 91, science: 98 },
  { id: 5, name: "Arifur Rahman", math: 68, english: 70, science: 65 },
  { id: 6, name: "Mim Akter", math: 81, english: 85, science: 88 },
  { id: 7, name: "Rakib Hossain", math: 77, english: 72, science: 75 },
  { id: 8, name: "Samiul Islam", math: 89, english: 84, science: 90 },
  { id: 9, name: "Farhana Khan", math: 90, english: 93, science: 92 },
  { id: 10, name: "Zubayer Al-Mahmud", math: 62, english: 65, science: 70 },
];

const ResultChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="yellow"></Line>
        <Line dataKey="english" stroke="blue"></Line>
        <Line dataKey="science" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
