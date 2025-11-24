"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button.jsx";
import { NumToMois } from "@/functions/GestionnaireDates.jsx";

function Graphs({ chartData, line = null }) {
  const [ChartData, setChartData] = useState(chartData);
  const [trends, setTrends] = useState(null);
  const [chartConfig, setChartConfig] = useState(null);
  const [params, setParams] = useState(null);
  const [yAxisConfigs, setYAxisConfigs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hardData, setHardData] = useState({
    "Aujourd'hui": [
      { heure: "05", féquentation: 1 },
      { heure: "06", féquentation: 3 },
      { heure: "07", féquentation: 6 },
      { heure: "08", féquentation: 10 },
      { heure: "09", féquentation: 12 },
      { heure: "10", féquentation: 14 },
      { heure: "11", féquentation: 18 },
      { heure: "12", féquentation: 34 },
      { heure: "13", féquentation: 45 },
      { heure: "14", féquentation: 36 },
      { heure: "15", féquentation: 19 },
      { heure: "16", féquentation: 24 },
      { heure: "17", féquentation: 16 },
      { heure: "18", féquentation: 11 },
      { heure: "19", féquentation: 9 },
      { heure: "20", féquentation: 6 },
      { heure: "21", féquentation: 2 },
    ],
    Mois: {
      année: {
        2024: {
          Décembre: [
            { jour: "01", fréquentation: 92 },
            { jour: "02", fréquentation: 108 },
            { jour: "03", fréquentation: 86 },
            { jour: "04", fréquentation: 78 },
            { jour: "05", fréquentation: 80 },
            { jour: "06", fréquentation: 50 },
            { jour: "07", fréquentation: 42 },
            { jour: "08", fréquentation: 55 },
            { jour: "09", fréquentation: 56 },
            { jour: "10", fréquentation: 76 },
          ],
        },
        2025: {
          Janvier: [
            { jour: "01", fréquentation: 92 },
            { jour: "02", fréquentation: 600 },
            { jour: "03", fréquentation: 86 },
            { jour: "04", fréquentation: 78 },
            { jour: "05", fréquentation: 80 },
            { jour: "06", fréquentation: 50 },
            { jour: "07", fréquentation: 42 },
            { jour: "08", fréquentation: 55 },
            { jour: "09", fréquentation: 56 },
            { jour: "10", fréquentation: 76 },
          ],
          Février: [
            { jour: "01", fréquentation: 92 },
            { jour: "02", fréquentation: 700 },
            { jour: "03", fréquentation: 86 },
            { jour: "04", fréquentation: 78 },
            { jour: "05", fréquentation: 80 },
            { jour: "06", fréquentation: 50 },
            { jour: "07", fréquentation: 42 },
            { jour: "08", fréquentation: 55 },
            { jour: "09", fréquentation: 56 },
            { jour: "10", fréquentation: 76 },
          ],
          Mars: [
            { jour: "01", fréquentation: 92 },
            { jour: "02", fréquentation: 800 },
            { jour: "03", fréquentation: 86 },
            { jour: "04", fréquentation: 78 },
            { jour: "05", fréquentation: 80 },
            { jour: "06", fréquentation: 50 },
            { jour: "07", fréquentation: 42 },
            { jour: "08", fréquentation: 55 },
            { jour: "09", fréquentation: 56 },
            { jour: "10", fréquentation: 76 },
          ],
          Avril: [
            { jour: "01", fréquentation: 92 },
            { jour: "02", fréquentation: 900 },
            { jour: "03", fréquentation: 86 },
            { jour: "04", fréquentation: 78 },
            { jour: "05", fréquentation: 80 },
            { jour: "06", fréquentation: 50 },
            { jour: "07", fréquentation: 42 },
            { jour: "08", fréquentation: 55 },
            { jour: "09", fréquentation: 56 },
            { jour: "10", fréquentation: 76 },
          ],
          Octobre: [
            { jour: "01", fréquentation: 92 },
            { jour: "02", fréquentation: 108 },
            { jour: "03", fréquentation: 86 },
            { jour: "04", fréquentation: 78 },
            { jour: "05", fréquentation: 80 },
            { jour: "06", fréquentation: 50 },
            { jour: "07", fréquentation: 42 },
            { jour: "08", fréquentation: 55 },
            { jour: "09", fréquentation: 56 },
            { jour: "10", fréquentation: 76 },
          ],
        },
      },
    },
    Année: {
      2024: [
        { mois: "January", fréquentation: 186 },
        { mois: "February", fréquentation: 305 },
        { mois: "March", fréquentation: 237 },
        { mois: "April", fréquentation: 73 },
        { mois: "May", fréquentation: 209 },
        { mois: "June", fréquentation: 214 },
      ],
      2025: [
        { mois: "January", fréquentation: 186 },
        { mois: "February", fréquentation: 305 },
        { mois: "March", fréquentation: 237 },
        { mois: "April", fréquentation: 73 },
        { mois: "May", fréquentation: 209 },
        { mois: "June", fréquentation: 214 },
      ],
    },
  });
  const [currentSelection, setCurrentSelection] = useState(null);

  async function getDataFromHardData(key, annee = null, mois = null) {
    let tempDatas = null;
    const date = new Date();
    if (key === "Année") {
      if (annee === null) {
        annee = date.getFullYear();
      }
      tempDatas = hardData[key][annee];
      await setCurrentSelection([key, Object.keys(hardData[key]), annee]);
    } else if (key === "Mois") {
      if (annee === null) {
        annee = date.getFullYear();
      }
      if (mois === null) {
        mois = NumToMois(date.getMonth());
      }
      tempDatas = hardData[key]["année"][annee][mois];
      let moisDatas = {};
      const moisKeys = Object.keys(hardData[key]["année"]);
      for (let i = 0; i < moisKeys.length; i++) {
        moisDatas[moisKeys[i]] = Object.keys(
          hardData[key]["année"][moisKeys[i]],
        );
      }
      await setCurrentSelection([key, moisKeys, moisDatas, annee, mois]);
    } else {
      tempDatas = hardData[key];
      await setCurrentSelection(key);
    }
    await setChartData(tempDatas);
    await setIsLoading(true);
  }

  function getTrendAndPercentage(tocheck) {
    let len = ChartData.length - 1;
    while (ChartData[len][tocheck] === ChartData[len - 1][tocheck]) {
      len -= 1;
    }
    const percentage = (
      (ChartData[len][tocheck] / ChartData[len - 1][tocheck]) * 100 -
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
    let max = ChartData[0][param];
    let min = ChartData[0][param];

    // Trouver min et max
    for (let i = 0; i < ChartData.length; i++) {
      if (ChartData[i][param] < min) {
        min = ChartData[i][param];
      }
      if (ChartData[i][param] > max) {
        max = ChartData[i][param];
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
    const keys = Object.keys(ChartData[0]);
    let config = {};
    let param = {
      XAxis: keys[0],
      datas: [],
      amountOf: ChartData.length,
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

      await setChartConfig(config);
      await setParams(param);
      await setTrends(trendsData);
      await setYAxisConfigs(yConfigs);
      await setIsLoading(false);
    }
    void fetchData();
  }, [ChartData]);

  if (!ChartData || !ChartData[0] || Object.keys(ChartData[0]).length < 1) {
    return <div>No data</div>;
  }

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <Card className="Card">
      <CardHeader>
        <CardTitle className={"flex flex-row-reverse"}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={
                  "h-9 px-4 py-2 has-[>svg]:px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                }
              >
                {currentSelection !== null
                  ? typeof currentSelection === "object"
                    ? currentSelection[0]
                    : currentSelection
                  : "Ouvrir"}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuGroup>
                {Object.keys(hardData).map((key) => {
                  if (key !== currentSelection) {
                    return (
                      <DropdownMenuItem
                        onClick={async () => getDataFromHardData(key)}
                        key={key}
                      >
                        {key}
                      </DropdownMenuItem>
                    );
                  }
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
        <CardDescription className={"flex justify-between"}>
          <div>
            Montre : {params.datas[0]}{" "}
            {params.datas.length > 1 ? "et " + params.datas[1] : ""}{" "}
            {" au cours des " +
              params.amountOf +
              " derniers " +
              params.XAxis +
              (params.amountOf > 1 &&
              params.XAxis.substring(params.XAxis.length - 1) !== "s"
                ? "s"
                : "")}
          </div>
          <div>
            {currentSelection === null || currentSelection === "Aujourd'hui" ? (
              ""
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={
                      "h-9 px-4 py-2 has-[>svg]:px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                    }
                  >
                    {currentSelection[0] === "Année" ? currentSelection[2] : ""}
                    {currentSelection[0] === "Mois"
                      ? currentSelection[4] + " - " + currentSelection[3]
                      : ""}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuGroup>
                    {currentSelection[1].map((key) => {
                      if ("Année" === currentSelection[0]) {
                        if (parseInt(currentSelection[2]) !== parseInt(key)) {
                          return (
                            <DropdownMenuItem
                              onClick={async () =>
                                getDataFromHardData(currentSelection[0], key)
                              }
                              key={key}
                            >
                              {key}
                            </DropdownMenuItem>
                          );
                        }
                      } else if ("Mois" === currentSelection[0]) {
                        return (
                          <div>
                            <DropdownMenuLabel key={key}>
                              {key}
                            </DropdownMenuLabel>
                            <DropdownMenuGroup>
                              {currentSelection[2][key].map((mois) => {
                                if (
                                  parseInt(currentSelection[3]) ===
                                    parseInt(key) &&
                                  currentSelection[4] === mois
                                ) {
                                  return "";
                                } else {
                                  return (
                                    <DropdownMenuItem
                                      onClick={async () =>
                                        getDataFromHardData(
                                          currentSelection[0],
                                          key,
                                          mois,
                                        )
                                      }
                                      key={key + "-" + mois}
                                    >
                                      {mois}
                                    </DropdownMenuItem>
                                  );
                                }
                              })}
                            </DropdownMenuGroup>
                            {currentSelection[1][
                              currentSelection[1].length - 1
                            ] !== key ? (
                              <DropdownMenuSeparator />
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      }
                    })}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="GraphContainer">
          <AreaChart
            accessibilityLayer
            data={ChartData}
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
            {line !== null ? (
              <ReferenceLine
                yAxisId={params.datas[0]}
                y={line}
                stroke="red"
                strokeDasharray="5 0"
              />
            ) : (
              ""
            )}
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
              if (
                trends[param].trend === "up" &&
                chartConfig[param] !== undefined
              ) {
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
              } else if (chartConfig[param] !== undefined) {
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
