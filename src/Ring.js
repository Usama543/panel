import { React, useEffect, useState } from "react";
import $ from "jquery";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Label,
  Cell,
} from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const data02 = [
  { id: 1, name: "Group A", value: 15 },
  { id: 2, name: "Group B", value: 55 },
  { id: 3, name: "Group C", value: 30 },
];
const data = [
  { name: "Group A", value: 10 },
  { name: "Group B", value: 10 },
  { name: "Group C", value: 10 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Ring() {
  const [X, setX] = useState();
  const [Y, setY] = useState();
  const [height, setHeight] = useState();
  const [inner, setInner] = useState();
  const [outer, setOuter] = useState();
  const [width, setWidth] = useState();
  function HoverUp(id) {
    $("#" + id).css({});
  }
  function HoverOut(id) {
    $("#" + id).css({ backgroundColor: "green" });
  }
  useEffect(() => {
    if (window.innerWidth >= 1550) {
      setInner(100);
      setOuter(120);
      setX(230);
      setY(200);
      setHeight(400);
      setWidth(400);
    }
    if (window.innerWidth <= 1550 && window.innerWidth >= 1460) {
      setInner(100);
      setOuter(120);
      setX(180);
      setY(200);
      setHeight(400);
      setWidth(400);
    }
    if (window.innerWidth <= 1460 && window.innerWidth >= 1040) {
      setInner(100);
      setOuter(120);
      setX(160);
      setY(200);
      setHeight(400);
      setWidth(300);
    }

    if (window.innerWidth <= 1040 && window.innerWidth >= 990) {
      setInner(80);
      setOuter(120);
      setX(160);
      setY(200);
      setHeight(400);
      setWidth(400);
    }
    if (window.innerWidth <= 990 && window.innerWidth >= 600) {
      setX(160);
      setHeight(300);
      setWidth(320);
      setY(170);
      setInner(40);
      setOuter(60);
    }
    if (window.innerWidth <= 600 && window.innerWidth >= 400) {
      setX(150);
      setHeight(300);
      setWidth(320);
      setY(170);
      setInner(40);
      setOuter(60);
    }
    if (window.innerWidth <= 400 && window.innerWidth >= 340) {
      setX(110);
      setHeight(300);
      setWidth(220);
      setY(170);
      setInner(40);
      setOuter(60);
    }
    if (window.innerWidth <= 340) {
      setX(70);
      setHeight(300);
      setWidth(120);
      setY(170);
      setInner(20);
      setOuter(30);
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1550) {
        setInner(100);
        setOuter(120);
        setX(230);
        setY(200);
        setHeight(400);
        setWidth(400);
      }
      if (window.innerWidth <= 1550 && window.innerWidth >= 1460) {
        setInner(100);
        setOuter(120);
        setX(180);
        setY(200);
        setHeight(400);
        setWidth(400);
      }
      if (window.innerWidth <= 1460 && window.innerWidth >= 1040) {
        setInner(100);
        setOuter(120);
        setX(160);
        setY(200);
        setHeight(400);
        setWidth(300);
      }

      if (window.innerWidth <= 1040 && window.innerWidth >= 990) {
        setInner(80);
        setOuter(120);
        setX(160);
        setY(200);
        setHeight(400);
        setWidth(400);
      }
      if (window.innerWidth <= 990 && window.innerWidth >= 600) {
        setX(210);
        setHeight(300);
        setWidth(320);
        setY(170);
        setInner(40);
        setOuter(60);
      }
      if (window.innerWidth <= 600 && window.innerWidth >= 400) {
        setX(150);
        setHeight(300);
        setWidth(320);
        setY(170);
        setInner(40);
        setOuter(60);
      }
      if (window.innerWidth <= 400 && window.innerWidth >= 340) {
        setX(130);
        setHeight(300);
        setWidth(220);
        setY(170);
        setInner(40);
        setOuter(60);
      }
      if (window.innerWidth <= 340) {
        setX(70);
        setHeight(300);
        setWidth(120);
        setY(170);
        setInner(20);
        setOuter(30);
      }
    });
  }, []);

  return (
    <PieChart width={width} height={height}>
      <Pie
        dataKey="value"
        onAnimationStart=""
        data={data02}
        cx={X}
        cy={Y}
        startAngle={145}
        endAngle={-215}
        innerRadius={inner}
        outerRadius={outer}
        fill="#82ca9d"
        margin={{
          top: 5,
          right: 50,
          left: 50,
          bottom: 5,
        }}
        style={{
          borderRadius: 30,
        }}
        paddingAngle={1}
      >
        {data.map((entry, index) => (
          <Cell
            id={entry.id}
            onMouseOver={HoverUp(entry.id)}
            onMouseOut={HoverOut(entry.id)}
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip
        contentStyle={{
          backgroundColor: "white",
          color: "#fff",
          borderRadius: 20,
        }}
      />
    </PieChart>
  );
}
