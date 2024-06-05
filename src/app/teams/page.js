"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import teamsChartData from "../Constants/TeamsChartData";

const OrgChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chartNode = chartRef.current;

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const width = 1000 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3
      .select(chartNode)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const treeLayout = d3.tree().size([width, height]);

    const root = d3.hierarchy(teamsChartData);
    const nodes = treeLayout(root).descendants();
    const links = treeLayout(root).links();

    svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr(
        "d",
        d3
          .linkVertical()
          .x((d) => d.x)
          .y((d) => d.y)
      )
      .style("fill", "none")
      .style("stroke", "#ccc")
      .style("stroke-width", "2px");

    const nodeGroup = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    nodeGroup
      .append("rect")
      .attr("class", "node-rect")
      .attr("width", "350px")
      .attr("height", "100px")
      .attr("rx", 30)
      .attr("ry", 30)
      .style("fill", "#FFEECC")
      .style("stroke", "white")
      .style("stroke-width", "1px");

    nodeGroup
      .append("text")
      .attr("dx", 80)
      .attr("dy", 30)
      .attr("text-anchor", "start")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text((d) => d.data.name);

    return () => {
      d3.select(chartNode).select("svg").remove();
    };
  }, []);

  return <div ref={chartRef} className="bg-blue-200 overflow-auto h-full"></div>;
};

export default OrgChart;
