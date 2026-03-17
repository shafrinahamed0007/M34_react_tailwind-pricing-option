import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  //   data processing from the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData?.id,
      name: studentData?.name,
      science: studentData?.marks?.science,
      math: studentData?.marks?.math,
      english: studentData?.marks?.english,
    };

    const avg = (student.science + student.math + student.english) / 3;
    student.avg = avg;
    return student;
  });

  console.log(marksChartData);
  console.log(marksData);
  return(
    <div>
        <BarChart width={800} height={800} data={marksChartData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="avg" fill="yellow"></Bar>
            <Bar dataKey="science" fill="blue"></Bar>
            <Bar dataKey="math" fill="red"></Bar>
        </BarChart>
    </div>

  );
};

export default MarksChart;
