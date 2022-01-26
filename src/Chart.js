import React, { useEffect, useState, FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  Bar,
  ReferenceLine,
  Area,
  LabelList,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    y: 2000,
    uv: 0,
  },
  {
    uv: 10000,
  },
  {
    name: "Mar",
    uv: 5000,
  },
  {
    uv: 15000,
  },
  {
    name: "May",

    uv: 10000,
  },
  {
    uv: 20000,
  },
  {
    name: "July",

    uv: 15000,
  },
  {
    uv: 25000,
  },
  {
    name: "Sep",

    uv: 20000,
  },
  {
    uv: 30000,
  },
  {
    name: "Nov",

    uv: 25000,
  },
  {
    uv: 40000,
  },
];

export default function Chart() {
  const [X, setX] = useState();
  const [Y, setY] = useState();
  const [height, setHeight] = useState();
  const [inner, setInner] = useState();
  const [outer, setOuter] = useState();
  const [width, setWidth] = useState();

  return (
    <ResponsiveContainer width="75%" height="100%" aspect={1.28}>
      <LineChart
        data={data}
        width="70%"
        margin={{
          top: 40,
          right: 10,
          left: 10,
        }}
      >
        <Line
          type="monotone"
          dataKey="uv"
          lineWidth={20}
          stroke="#4e73df "
          strokeWidth={3}
          dot={{ shadow: 20 }}
        />

        <CartesianGrid strokeDasharray="1 2" horizontal="true" vertical="" />
        <Tooltip
          cursor={false}
          contentStyle={{
            backgroundColor: "white",
            color: "#fff",
            borderRadius: 20,
          }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tickFormatter={(y) => `$${y}`}
        />
        <XAxis axisLine={false} tickLine={false} dataKey="name" />

        <Legend verticalAlign="top" height={36} />
      </LineChart>
    </ResponsiveContainer>
  );
}
