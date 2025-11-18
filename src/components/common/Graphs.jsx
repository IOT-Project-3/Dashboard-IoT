"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function Graphs() {
  const chartData = [
    { month: "January", visites: 186, vent: 20 },
    { month: "February", visites: 305, vent: 20 },
    { month: "March", visites: 237, vent: 20 },
    { month: "April", visites: 73, vent: 20 },
    { month: "May", visites: 209, vent: 20 },
    { month: "June", visites: 214, vent: 20 },
  ];
  const [trends, setTrends] = React.useState(null);
  const [chartConfig, setChartConfig] = React.useState(null);
  const [params, setParams] = React.useState(null);
  const [yAxis, setYAxis] = React.useState(null);

  function getTrendAndPercentage(tocheck) {
    const len = chartData.length - 1;
    const percentage =
      (chartData[len][tocheck] / chartData[len - 1][tocheck]) * 100;
    const trend = percentage > 0 ? "up" : "down";
    if (trends === null) {
      let Trends = {};
      Trends[tocheck] = {
        trend: trend,
        percentage: percentage,
      };
      setTrends(Trends);
    } else {
      let Trends = { ...trends };
      Trends[tocheck] = { trend: trend, percentage: percentage };
      setTrends(Trends);
    }
  }

  function getYAxis(param) {
    let max = chartData[0][param];
    let mini = chartData[0][param];
    for (let i = 1; i < chartData.length; i++) {
      if (chartData[i][param] < mini) {
        mini = chartData[i][param];
      }
      if (chartData[i][param] > max) {
        max = chartData[i][param];
      }
    }

    let nbDivPar10Max = 0;
    let nbDivPar10Mini = 0;
    if (mini > 0) {
      while (mini >= 1) {
        mini /= 10;
        nbDivPar10Mini++;
      }
      mini = mini * 10 ** nbDivPar10Mini;
    } else if (mini < 0) {
      while (mini <= 1) {
        mini /= 10;
        nbDivPar10Mini++;
      }
      mini = mini * 10 ** nbDivPar10Mini;
    }

    if (max > 0) {
      while (max >= 1) {
        max /= 10;
        nbDivPar10Max++;
      }
      max = max * 10 ** nbDivPar10Max;
    } else if (max < 0) {
      while (max <= 1) {
        max /= 10;
        nbDivPar10Max++;
      }

      max = max * 10 ** nbDivPar10Max;
    }
  }

  function generateDataAxis(dataMini, dataMaxi) {
    let dataAxis = [];
    for (let i = dataMini; i <= dataMaxi; i += 10) {
      dataAxis.push(i);
    }
    return dataAxis;
  }

  function generateConfig() {
    const keys = Object.keys(chartData[0]);
    let config = {};
    let param = [];
    let label = "";
    for (let i = 1; i < keys.length; i++) {
      let contentConfig = {};
      label = keys[i];
      contentConfig["label"] = label.charAt(0).toUpperCase() + label.slice(1);
      contentConfig["color"] = "var(--chart-" + (i + 1) + ")";
      config[label] = contentConfig;
      param.push(label);
      getTrendAndPercentage(label);
    }
    setChartConfig(config);
    setParams(param);
  }

  if (chartConfig === null || params === null || trends === null) {
    generateConfig();
  } else {
    return (
      <Card className={"Card"}>
        <CardHeader className={""}>
          <CardTitle className={""}>Area Chart - Linear</CardTitle>
          <CardDescription className={""}>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className={""}>
          <ChartContainer config={chartConfig} className={"GraphContainer"}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              {params.map((param) => (
                <Area
                  dataKey={param}
                  type="linear"
                  fill={"var(--color-" + param + ")"}
                  fillOpacity={0.4}
                  stroke={"var(--color-" + param + ")"}
                />
              ))}
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className={""}>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default Graphs;
