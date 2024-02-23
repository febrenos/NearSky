import React from "react";
import ApexCharts from 'react-apexcharts'
import * as Styled from './style.js'
//npm install apexcharts react-apexcharts

export function LineGraphic({ title, data, series, xAxis = [24], yAxis = [], yFormat, dottedValue  }) {
  function generateXAxisBase(xAxis, data) {
    const xAxisList = [];
    const sequenceValue = xAxis[0] / (data.length - 1);
  
    let counter = 0;
    let sequenceItem = 0;
  
    while (counter < data.length) {
      // Use o método Number.isInteger() para verificar se o número é inteiro
      const formattedValue = Number.isInteger(sequenceItem) ? sequenceItem.toFixed(0) : sequenceItem.toFixed(0);
  
      xAxisList.push(`${formattedValue}`);
      sequenceItem += sequenceValue;
  
      // Verifica se é o último valor e se não é igual ao desejado
      if (counter === data.length - 1 && sequenceItem !== xAxis[0]) {
        const roundedValue = sequenceItem.toFixed(0);//!
  
        // Mostra os valores quebrados e arredonda se necessário
        if (roundedValue.endsWith('.9')) {
          sequenceItem = Math.ceil(sequenceItem);
        }
      }
  
      counter++;
    }
    return xAxisList;
  }

  function convertToHour(data = []) {
    const converted = [];
  
    for (let i in data) {
      const hours = Math.floor(data[i]);
      const minutes = ((data[i] * 60) % 60).toFixed(0).padStart(2, '0');
      
      converted.push(`${hours}:${minutes}`);
    }
  
    return converted;
  }
  
  const xAxisBase = generateXAxisBase(xAxis, data);
  const xAxisHour = convertToHour(xAxisBase);
  var options = {
    series: [{
      name: series,
      data: data,
      // color: "#EE6D7A",
      labels: {
        style: {
          colors: 'black',
        }
      }
    }],
    chart: {
      height: 200,
      width: 400,
      type: 'area',
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: []
        },
        icons: {
          download: 'var(--text-color)', // Cor desejada para o ícone de download
          selection: 'var(--text-color)', // Cor desejada para o ícone de seleção
          // Adicione outras propriedades para ícones adicionais conforme necessário
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      // colors: ['red'],
      // fill: {
      //   colors: 'red'
      // }
    },
    xaxis: {
      type: 'category',
      categories: xAxisBase,
      labels: {
        style: {
          colors: 'var(--text-color)',
        }
      },
      tickAmount: data.length
    },
    yaxis: {
      labels: {
        style: {
          colors: 'var(--text-color)',
        },
        formatter: function (value) {
          return value + yFormat; // Adiciona '%' ao lado de cada valor do eixo y
        }
      }
    },
    tooltip: {
      x: {
        show: false,
        format: 'HH',
        formatter: undefined,
      },
    },
  };
      
  return (
    <Styled.Column>
      <Styled.Title>{title}</Styled.Title>
      <ApexCharts
        options={options}
        series={options.series}
        type="area"
        height={options.chart.height}
      />
    </Styled.Column>
  );
}
