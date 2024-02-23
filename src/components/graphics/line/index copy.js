import React, { useState } from "react";
import * as Styled from './style'

export function LineGraphic({ title, maxX, maxY, dataPoints, width = "100%", height = "100%", xAxis = [], yAxis = [] }) {
  const [cursorX, setCursorX] = useState(null);
  const [tooltipValue, setTooltipValue] = useState(null);

  // Função para gerar objetos no início e no final do array
  const generateStartAndEndObjects = () => {
      const startObject = { x: dataPoints[0].x - 1, y: 0 };
      const endObject = { x: dataPoints[dataPoints.length - 1].x + 1, y: 0 };
      return [startObject, ...dataPoints, endObject];
  };

  // Adicionar objetos no início e no final do array
  const dataPointsWithPadding = generateStartAndEndObjects();

  const scaleX = (x) => (x / maxX) * 100;
  const scaleY = (y) => ((maxY - y) / maxY) * 100 + 50;

  // Mouse position
  const handleMouseMove = (event) => {
      const mouseX = event.nativeEvent.offsetX;
      setCursorX(mouseX);

      // Calcula o valor correspondente do yAxis com base na posição do cursor
      const xValue = (mouseX / (20 * maxX)) * maxX; // Converte a posição do cursor para o valor correspondente de x
      const closestDataPoint = dataPointsWithPadding.reduce((closest, point) => {
          return Math.abs(point.x - xValue) < Math.abs(closest.x - xValue) ? point : closest;
      });

      setTooltipValue(closestDataPoint.y);
  };

  // Mouse leave graphic
  const handleMouseLeave = () => {
      setCursorX(null);
      setTooltipValue(null);
  };

  const generatePath = () => {
      if (dataPointsWithPadding.length < 2) return '';

      const containerWidth = parseInt(width, 10);

      let path = `M${scaleX(dataPointsWithPadding[0].x, containerWidth)} ${scaleY(dataPointsWithPadding[0].y)}`;

      for (let i = 1; i < dataPointsWithPadding.length; i++) {
          const point = dataPointsWithPadding[i];
          const controlX = scaleX((dataPointsWithPadding[i - 1].x + point.x) / 2, containerWidth);
          const controlY = scaleY((dataPointsWithPadding[i - 1].y + point.y) / 2);

          path += `Q${controlX} ${controlY}, ${scaleX(point.x, containerWidth)} ${scaleY(point.y)}`;
      }
      return path;
  };

  return (
      <div>
          <Styled.Title>{`${title} ${tooltipValue}`}</Styled.Title>
          <Styled.Flex>
              <Styled.YAxis>
                  {yAxis.slice().reverse().map((value, index) => (
                      <Styled.Text key={index}>{value}</Styled.Text>
                  ))}
              </Styled.YAxis>
              <Styled.YAxis>
                  <Styled.GraphContainer
                      width={width}
                      height={height}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                  >
                      <Styled.Line d={generatePath()} />
                      {cursorX !== null && (
                          <Styled.CursorLine x1={cursorX} x2={cursorX} y1="0" y2="100%" />
                      )}
                  </Styled.GraphContainer>
                  <Styled.Flex>
                      {xAxis.map((value, index) => (
                          <Styled.Text key={index}>{`${value}`}</Styled.Text>
                      ))}
                  </Styled.Flex>
              </Styled.YAxis>
          </Styled.Flex>
      </div>
  );
}