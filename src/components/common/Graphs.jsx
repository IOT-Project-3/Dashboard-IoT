"use client";

import React, { useEffect, useState } from "react";
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

function Graphs({ chartData }) {
  const [trends, setTrends] = useState(null);
  const [chartConfig, setChartConfig] = useState(null);
  const [params, setParams] = useState(null);
  const [yAxisConfigs, setYAxisConfigs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!chartData || !chartData[0] || Object.keys(chartData[0]).length < 1) {
    return <div>No data</div>;
  }

  function getTrendAndPercentage(tocheck) {
    const len = chartData.length - 1;
    const percentage = (
      (chartData[len][tocheck] / chartData[len - 1][tocheck]) * 100 -
      100
    ).toFixed(2);
    const trend = percentage > 0 ? "up" : "down";
    return { trend: trend, percentage: percentage };
  }

  function getBiggestUnit(value) {
    if (value === 0) return 1;

    const absValue = Math.abs(value);
    let unit = 1;

    // Trouver la plus grande puissance de 10
    while (unit * 10 <= absValue) {
      unit *= 10;
    }

    return unit;
  }

  function generateYAxisConfig(param) {
    let max = chartData[0][param];
    let min = chartData[0][param];

    // Trouver min et max
    for (let i = 0; i < chartData.length; i++) {
      if (chartData[i][param] < min) {
        min = chartData[i][param];
      }
      if (chartData[i][param] > max) {
        max = chartData[i][param];
      }
    }

    // Déterminer la plus grande unité basée sur la valeur maximale
    const biggestUnit = getBiggestUnit(max);

    // Arrondir min et max aux multiples de la plus grande unité
    let roundedMin = Math.floor(min / biggestUnit) * biggestUnit;
    let roundedMax = Math.ceil(max / biggestUnit) * biggestUnit;

    roundedMin = roundedMin > 0 ? 0 : roundedMin;
    roundedMax =
      roundedMax % biggestUnit === 0 ? roundedMax + biggestUnit : roundedMax;

    // Générer les ticks (valeurs sur l'axe Y)
    const ticks = [];
    for (let i = roundedMin; i <= roundedMax; i += biggestUnit) {
      ticks.push(i);
    }

    return {
      domain: [roundedMin, roundedMax],
      ticks: ticks,
      unit: biggestUnit,
    };
  }

  function generateConfig() {
    const keys = Object.keys(chartData[0]);
    let config = {};
    let param = {
      XAxis: keys[0],
      datas: [],
      amountOf: chartData.length,
    };

    for (let i = 1; i < keys.length; i++) {
      let contentConfig = {};
      const label = keys[i];
      contentConfig["label"] = label.charAt(0).toUpperCase() + label.slice(1);
      contentConfig["color"] = `var(--chart-${i + 1})`;
      config[label] = contentConfig;
      param.datas.push(label);
    }

    return { config, param };
  }

  function generateAxisTrend(paramList) {
    let dataTrends = {};

    for (let i = 0; i < paramList.length; i++) {
      dataTrends[paramList[i]] = getTrendAndPercentage(paramList[i]);
    }

    return dataTrends;
  }

  function generateAllYAxisConfigs(paramList) {
    let configs = {};

    for (let i = 0; i < paramList.length; i++) {
      configs[paramList[i]] = generateYAxisConfig(paramList[i]);
    }

    return configs;
  }

  useEffect(() => {
    async function fetchData() {
      const { config, param } = generateConfig();
      const trendsData = generateAxisTrend(param.datas);
      const yConfigs = generateAllYAxisConfigs(param.datas);

      setChartConfig(config);
      setParams(param);
      setTrends(trendsData);
      setYAxisConfigs(yConfigs);
      setIsLoading(false);
    }
    void fetchData();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <Card className="Card">
      <CardHeader>
        <CardTitle>Area Chart - Linear</CardTitle>
        <CardDescription>
          Showing total of {params.datas[0]}{" "}
          {params.datas.length > 1 ? "and " + params.datas[1] : ""}{" "}
          {" for the last " +
            params.amountOf +
            " " +
            params.XAxis +
            (params.amountOf > 1 ? "s" : "")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="GraphContainer">
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
              dataKey={params.XAxis}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            {params.datas.map((param, index) => {
              const axisConfig = yAxisConfigs[param];
              return (
                <YAxis
                  key={param}
                  yAxisId={param}
                  domain={axisConfig.domain}
                  ticks={axisConfig.ticks}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  orientation={index > 0 ? "right" : "left"}
                />
              );
            })}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            {params.datas.map((param) => {
              if (
                yAxisConfigs[param].domain[0] >= 0 &&
                params.datas.length === 1
              ) {
                return (
                  <Area
                    key={param}
                    dataKey={param}
                    yAxisId={param}
                    type="linear"
                    fill={`var(--color-${param})`}
                    fillOpacity={0.4}
                    stroke={`var(--color-${param})`}
                  />
                );
              } else {
                return (
                  <Area
                    key={param}
                    dataKey={param}
                    yAxisId={param}
                    type="linear"
                    fillOpacity={0}
                    stroke={`var(--color-${param})`}
                  />
                );
              }
            })}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            {params.datas.map((param, key) => {
              if (trends[param].trend === "up") {
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 leading-none font-medium"
                  >
                    {chartConfig[param].label} : Trending up by{" "}
                    {trends[param].percentage}%{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                );
              } else {
                return (
                  <div
                    key={key}
                    className="flex items-center gap-2 leading-none font-medium"
                  >
                    {chartConfig[param].label} : Trending down by{" "}
                    {trends[param].percentage * -1}%{" "}
                    <TrendingUp
                      className="h-4 w-4"
                      style={{ transform: "scaleY(-1)" }}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Graphs;
