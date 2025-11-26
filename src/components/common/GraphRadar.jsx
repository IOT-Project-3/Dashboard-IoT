import React, { useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  RadarChart,
  Radar,
  PolarRadiusAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function GraphRadar() {
  const [ChartData] = useState([
    { question: "Qest1", note: 1.6 },
    { question: "Qest2", note: 1.5 },
    { question: "Qest3", note: 2.2 },
    { question: "Qest4", note: 2.6 },
    { question: "Qest5", note: 2.2 },
    { question: "Qest6", note: 2.8 },
  ]);
  const [chartConfig] = useState({
    question: {
      label: "Question",
      color: "var(--chart-1)",
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radar</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <RadarChart
            accessibilityLayer
            data={ChartData}
            margin={{
              top: 20,
              bottom: 20,
              left: 20,
              right: 20,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
              opacity={0}
            />
            <PolarAngleAxis
              dataKey="question"
              tick={({ x, y, textAnchor, index, ...props }) => {
                const data = ChartData[index];
                return (
                  <text
                    x={x}
                    y={index === 0 ? y - 10 : y}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan fill={"#ddd"}>
                      {((data.note / 3) * 100).toFixed(1)}%
                    </tspan>
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      className="fill-muted-foreground"
                    >
                      {data.question}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarGrid />
            <Radar
              dataKey="note"
              fill="var(--color-question)"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default GraphRadar;
