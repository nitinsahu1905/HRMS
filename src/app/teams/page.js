"use client";
import React, { useEffect } from "react";
import teamsChartData from "../Constants/TeamsChartData";
import * as d3 from "d3";
import Image from "next/image";

const TeamsChart = () => {
  // Use useEffect to trigger the D3 rendering when the component mounts
  useEffect(() => {
    renderD3Tree();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to render the D3 tree
  const renderD3Tree = () => {
    // Define a scale factor for the chart elements
    const scale = getScale();

    // Define styles for the employee box
    let employeeBox = {
      width: 0,
      height: 0,
      borderTopWidth: 20 * scale,
      borderRadius: 20 * scale,
      fontSize: 20 * scale,
      nameFontSize: 25 * scale,
      designationFontSize: 23 * scale,
    };

    // Retrieve data from the teams chart data constant
    const data = teamsChartData;

    // Define the size of each node in the tree
    const nodeSize = { width: 480 * scale, height: 180 * scale };

    // Define the size of the foreign object containing each node's content
    let foreignObjectSize = {
      width: nodeSize.width,
      height: nodeSize.height,
    };
    // Define the vertical spacing between nodes
    const verticalSpacing = 400 * scale;

    // Define the horizontal spacing between nodes
    const horizontalSpacing = 150 * scale;

    // Create a tree layout and configure it
    // d3.tree(): Creates a new tree layout.
    // .nodeSize([width, height]): Sets the size of each node in the layout.
    // d3.hierarchy(data): Converts the raw data into a hierarchical format.
    // treemap(nodes): Applies the tree layout to the hierarchical data, calculating the positions of each node.
    // const treemap = d3.tree().nodeSize([nodeSize.width, nodeSize.width]);
    const treemap = d3
      .tree()
      .nodeSize([nodeSize.width + horizontalSpacing, nodeSize.height]);
    let nodes = d3.hierarchy(data);
    nodes = treemap(nodes);

    // Calculate the minimum and maximum coordinates of the nodes
    const minMaxCoordinate = {
      minX: d3.min(nodes.descendants(), (d) => d.x),
      minY: d3.min(nodes.descendants(), (d) => d.y),
      maxX: d3.max(nodes.descendants(), (d) => d.x),
      maxY: d3.max(nodes.descendants(), (d) => d.y),
    };

    // Adjust the y-coordinate of each node and update the min/max coordinates
    nodes.descendants().forEach((d) => {
      d.y = d.depth * verticalSpacing;
      if (minMaxCoordinate.minX > d.x) minMaxCoordinate.minX = d.x;
      if (minMaxCoordinate.maxX < d.x) minMaxCoordinate.maxX = d.x;
      if (minMaxCoordinate.minY > d.y) minMaxCoordinate.minY = d.y;
      if (minMaxCoordinate.maxY < d.y) minMaxCoordinate.maxY = d.y;
    });

    // Calculate the overall size of the tree
    const treeSize = {
      width: minMaxCoordinate.maxX - minMaxCoordinate.minX + 2 * nodeSize.width,
      height:
        minMaxCoordinate.maxY - minMaxCoordinate.minY + 2 * nodeSize.height,
    };

    // Calculate the centering offsets
    const topNodeX = Math.abs(minMaxCoordinate.minX) + nodeSize.width;
    const topNodeY = Math.abs(minMaxCoordinate.minY) + nodeSize.height;

    // Select the SVG element and set its size and background color
    const svg = d3
      .select("#team-chart-svg")
      .attr("width", treeSize.width)
      .attr("height", treeSize.height)
      .attr("viewBox", `0 0 ${treeSize.width} ${treeSize.height}`)
      .style("background-color", "#fff");

    // Create a group element for the chart
    const g = svg
      .append("g")
      .attr("transform", `translate(${topNodeX}, ${topNodeY})`);

    // Draw the lines connecting nodes
    const link = g
      .selectAll(".link")
      .data(nodes.descendants().slice(1))
      .enter()
      .append("polyline")
      .attr("class", "link")
      .style("stroke", "#ccc")
      .style("stroke-width", 2)
      .style("fill", "none")
      .attr("points", (d) => {
        const sourceX = d.x;
        const sourceY = d.y;
        const targetX = d.parent.x;
        const targetY = d.parent.y;
        return `${sourceX},${sourceY} ${sourceX},${
          (sourceY + targetY) / 2
        } ${targetX},${(sourceY + targetY) / 2} ${targetX},${targetY}`;
      });

    // Draw the nodes and their content
    const node = g
      .selectAll(".node")
      .data(nodes.descendants())
      .enter()
      .append("g")
      .attr("class", (d) => (d.children ? " node--internal" : " node--leaf"))
      .attr(
        "transform",
        (d) =>
          `translate(${d.x - foreignObjectSize.width / 2}, ${
            d.y - foreignObjectSize.height / 3
          })`
      );

    // Add employee details to each node
    // Inside the node.each function

    node.each(function (d) {
      const currentNode = d3.select(this);
      const foreignObject = currentNode
        .append("foreignObject")
        // .attr("width", foreignObjectSize.width)
        // .attr("height", foreignObjectSize.height)
        // .attr("class", "foreignObject")
        .attr(
          "style",
          `width: ${foreignObjectSize.width}; height: ${foreignObjectSize.height}; display: flex; justify-content: center; align-items: center; border-radius: 10px;`
        );

      const employeeDiv = foreignObject
        .append("xhtml:div")
        .attr("class", "employee-box")
        .attr(
          "style",
          `display:flex; flex-direction:row; justify-content:space-around; align-items:center; background-color:${d.data.color}; font-size:${employeeBox.fontSize}px; text-align: center; height: 100%; width: 100%; box-shadow: 2px 2px 10px rgb(183, 183, 183);`
        );

      const imageContainer = employeeDiv
        .append("xhml:div")
        .attr("class", "employee-image-container")
        .attr(
          "style",
          "width:30%; height:100%; border-right:1px solid white; display:flex; justify-content:center; align-items:center; overflow:hidden;"
        );

      imageContainer
        .append("xhtml:img")
        .attr("class", "employee-image")
        .attr("src", `${d.data.imageUrl}`)
        .attr(
          "style",
          "width:80%;aspect-ratio: 1; height:auto; border-radius:20%; "
        );

      employeeDiv
        .append("xhtml:div")
        .attr("class", "employee-detail")
        .attr(
          "style",
          `font-weight:bold; text-align:center; display: flex; flex-direction: column; justify-content: center; width:70%; height:100%;`
        ).html(`
          <div class="emp-name-container" style="height:50%; display:flex; justify-content:center; align-items:center; border-bottom:1px solid white;">
            <div class="emp-name" style="color:#1b2d48; font-size:${employeeBox.nameFontSize}px; ">
              ${d.data.name}
            </div>
          </div>
          <div class="emp-designation-container" style="height:50%; display:flex; justify-content:center; align-items:center;">
                    <div class="emp-designation" style="font-weight: normal; color: #222222; font-size:${employeeBox.designationFontSize}px;">
            ${d.data.title}
          </div>
          </div>
        `);
    });
  };

  // Function to calculate the scale based on screen width
  const getScale = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 400) return 0.1;
    if (screenWidth <= 600) return 0.15;
    if (screenWidth <= 768) return 0.18;
    if (screenWidth <= 992) return 0.2;
    if (screenWidth <= 1200) return 0.25;
    if (screenWidth <= 1600) return 0.3;
    if (screenWidth <= 1800) return 0.35;
    if (screenWidth <= 2000) return 0.4;
    if (screenWidth <= 2200) return 0.45;
    if (screenWidth <= 2400) return 0.5;
    if (screenWidth <= 2600) return 0.6;
    if (screenWidth <= 2800) return 0.7;
    if (screenWidth <= 3000) return 0.8;
    if (screenWidth <= 3200) return 0.85;
    if (screenWidth <= 3400) return 0.9;
    return 1;
  };

  return (
    <div className="h-full w-full p-[20px] flex flex-col gap-2 bg-white ml-[4vw]">
      {/* title of the page */}
      <h1 className="text-dark-blue font-bold lg:text-[24px]">My Team</h1>

      {/* heading box */}
      <div className="w-full bg-[#E5F4FF] flex flex-col justify-center items-center gap-[28px] p-3 rounded-[12px]">
        {" "}
        <div className="w-full flex justify-center items-center gap-[28px] p-3 rounded-[12px]">
          {/* img section */}
          <span className="w-[60px] h-[60px] bg-red-300 rounded-full">
            <Image
              className="rounded-full"
              src="https://imgs.search.brave.com/9W3fwsbfS8OFTL2r1Z0-csEmX_gSOuiJHmRC92R46fw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mci53/ZWIuaW1nMi5hY3N0/YS5uZXQvY18zMDBf/MzAwL21lZGlhcy9u/bWVkaWEvMTgvMzUv/NDMvMDEvMTg4Nzcw/NDAuanBn"
              width={50}
              height={50}
            />
          </span>
          {/* name & message section */}
          <span className="flex flex-col">
            {" "}
            <span className="text-[#808080] text-[16px]">
              Good to see you again &#128521;
            </span>
            <span className="text-[20px] font-[500]">Aishwarya Rathore</span>
          </span>
          {/* role section */}
          <span className="h-max text-[12px] text-[#0D99FF] font-[600] border-2 rounded-[10px] border-[#0D99FF] flex items-center p-2">
            Project Manager
          </span>
        </div>
        {/* search bar */}
        <input
          className="bg-white w-full h-[45px] rounded-[30px] px-[60px] outline-none"
          placeholder="Search"
        />
      </div>

      {/* container for the teams chart */}
      <div className="svg-container">
        <svg className="w-full " id="team-chart-svg"></svg>
      </div>
    </div>
  );
};

export default TeamsChart;
