"use client";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function OrderChat({
  chartData,
}: {
  chartData: [
    {
      pending: number;
      delivered: number;
      "on the way": number;
      userId: number;
    }
  ];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="userId" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="userId" height={30} stroke="#8884d8" />
        <Bar dataKey="on the way" fill="#8884d8" />
        <Bar dataKey="delivered" fill="#4a63b5" />
        <Bar dataKey="pending" fill="#decd1d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default OrderChat;
