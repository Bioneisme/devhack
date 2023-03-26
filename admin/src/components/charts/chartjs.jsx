import React from 'react';

import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

import useChartData from '../../hooks/useChartData';
import { customTooltips } from '../utilities/utilities';
import { ChartContainer } from "../../pages/MainPage/style/style.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartjsBarChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    datasets,
    labels,
  };
  return <Bar data={data} height={height} options={options} />;
};

ChartjsBarChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: '#001737',
      barPercentage: 0.6,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: '#1ce1ac',
      barPercentage: 0.6,
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsBarChart.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};

// const ChartjsHorizontalChart = props => {
//   const { labels, datasets, options, height } = props;
//   const data = {
//     datasets,
//     labels,
//   };
//   return <HorizontalBar data={data} height={height} options={options} />;
// };

// ChartjsHorizontalChart.defaultProps = {
//   height: 200,
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
//       backgroundColor: '#001737',
//       barPercentage: 0.6,
//     },
//     {
//       data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
//       backgroundColor: '#1ce1ac',
//       barPercentage: 0.6,
//     },
//   ],
//
//   options: {
//     maintainAspectRatio: true,
//     responsive: true,
//     legend: {
//       display: false,
//       labels: {
//         display: false,
//       },
//     },
//     scales: {
//       yAxes: [
//         {
//           gridLines: {
//             display: false,
//           },
//           ticks: {
//             beginAtZero: true,
//             fontSize: 10,
//             fontColor: '#182b49',
//           },
//         },
//       ],
//       xAxes: [
//         {
//           gridLines: {
//             color: '#e5e9f2',
//           },
//
//           ticks: {
//             beginAtZero: true,
//             fontSize: 11,
//             fontColor: '#182b49',
//             max: 100,
//           },
//         },
//       ],
//     },
//   },
// };

// ChartjsHorizontalChart.propTypes = {
//   height: PropTypes.number,
//   labels: PropTypes.arrayOf(PropTypes.string),
//   datasets: PropTypes.arrayOf(PropTypes.object),
//   options: PropTypes.object,
// };

const ChartjsStackedChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    datasets,
    labels,
  };
  return <Bar data={data} height={height} options={options} />;
};

ChartjsStackedChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: '#001737',
      barPercentage: 0.6,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: '#1ce1ac',
      barPercentage: 0.6,
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },

          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsStackedChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};

const ChartjsLineChart = props => {
  const { labels, datasets, options, height, layout, width, id } = props;
  const data = {
    labels,
    datasets,
  };
  return (
    <ChartContainer className="parentContainer">
      <Line
        id={id && id}
        width={width}
        data={data}
        height={height}
        options={{
          ...options,
          ...layout,
        }}
      />
    </ChartContainer>
  );
};

ChartjsLineChart.defaultProps = {
  height: 479,
  width: null,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: false,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: false,
    },
  ],

  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: '-10',
        right: 0,
        top: 0,
        bottom: '-10',
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
  },
};

ChartjsLineChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.object,
  width: PropTypes.number,
  options: PropTypes.object,
  id: PropTypes.string,
};

const ChartjsAreaChart = props => {
  const { labels, datasets, options, height, layout, id } = props;

  const data = {
    labels,
    datasets,
  };
  return (
    <div>
      <ChartContainer className="parentContainer">
        <Line
          id={id}
          data={data}
          height={height}
          options={{
            tooltips: {
              mode: 'nearest',
              intersect: false,
              enabled: false,
              custom: customTooltips,
              callbacks: {
                labelColor() {
                  return {
                    backgroundColor: datasets.map(item => item.borderColor),
                    borderColor: 'transparent',
                  };
                },
              },
            },
            ...options,
            ...layout,
          }}
        />
      </ChartContainer>
    </div>
  );
};

ChartjsAreaChart.defaultProps = {
  height: 250,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: true,
      backgroundColor: '#00173750',
      pointHoverBorderColor: 'transparent',
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: true,
      backgroundColor: '#1ce1ac50',
      pointHoverBorderColor: 'transparent',
    },
  ],
  options: {
    maintainAspectRatio: true,
    hover: {
      mode: 'nearest',
      intersect: false,
    },

    layout: {
      padding: {
        left: -10,
        right: 0,
        top: 2,
        bottom: -10,
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            display: false,
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },

          ticks: {
            beginAtZero: true,
            fontSize: 11,
            display: false,
          },
        },
      ],
    },
  },
};

ChartjsAreaChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.object,
  options: PropTypes.object,
  id: PropTypes.string,
};

const ChartjsBarChartTransparent = props => {
  const { labels, datasets, options, height, layout } = props;

  const data = {
    labels,
    datasets,
  };

  return (
    <ChartContainer className="parentContainer">
      <Bar
        data={data}
        height={window.innerWidth <= 575 ? 230 : height}
        options={{
          ...options,
          ...layout,
          tooltips: {
            mode: 'label',
            intersect: false,
            position: 'average',
            enabled: false,
            custom: customTooltips,
            callbacks: {
              label(t, d) {
                const dstLabel = d.datasets[t.datasetIndex].label;
                const { yLabel } = t;
                return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
              },
              labelColor(tooltipItem, chart) {
                const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
                return {
                  backgroundColor: dataset.hoverBackgroundColor,
                  borderColor: 'transparent',
                  usePointStyle: true,
                };
              },
            },
          },
        }}
      />
    </ChartContainer>
  );
};

ChartjsBarChartTransparent.defaultProps = {
  height: 176,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: 'rgba(0,23,55, .5)',
      label: 'Profit',
      barPercentage: 0.6,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: 'rgba(28,225,172, .5)',
      label: 'Lose',
      barPercentage: 0.6,
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        boxWidth: 6,
        display: true,
        usePointStyle: true,
      },
    },
    layout: {
      padding: {
        left: '0',
        right: 0,
        top: 0,
        bottom: '0',
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 13,
            fontColor: '#182b49',
            max: 80,
            stepSize: 20,
            callback(value) {
              return `${value}k`;
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            beginAtZero: true,
            fontSize: 13,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsBarChartTransparent.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
  layout: PropTypes.object,
};

const ChartjsBarChartGrad = props => {
  const { labels, datasets, options, height, layout } = props;
  const data = {
    labels,
    datasets,
  };
  return <Bar data={data} height={height} options={{ ...options, ...layout }} />;
};

ChartjsBarChartGrad.defaultProps = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      backgroundColor: 'rgba(0,23,55, .5)',
      barPercentage: 0.6,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      backgroundColor: 'rgba(28,225,172, .5)',
      barPercentage: 0.6,
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    layout: {
      padding: {
        left: '0',
        right: 0,
        top: 0,
        bottom: '0',
      },
    },
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },

          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  },
};

ChartjsBarChartGrad.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
  layout: PropTypes.object,
};

const ChartjsPieChart = props => {
  const { labels, datasets, options, height } = props;
  const data = {
    labels,
    datasets,
  };
  return <Pie data={data} height={height} options={options} />;
};

ChartjsPieChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    },
  ],

  options: {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

ChartjsPieChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};
/**
 *
 *  {const labels = chart.data.labels.reduce((prev, curent, i) => {
        return `${prev}<li><span class="doughnutLabelColor" style="background-color:${chart.data.datasets[0].backgroundColor[i]}"></span><span class="doughnutLabe">${curent}</span></li>`;
      }, '');
      const generatedLegend = `<ul class="${chart.id}-legend">${labels}</ul>`;

      return generatedLegend;} props
 */

const ChartjsDonutChart = props => {
  const { labels, datasets, options, height } = props;
  const { ref } = useChartData();
  const data = {
    labels,
    datasets,
  };

  return (
    <div style={{ position: 'relative' }}>
      <p>
        <span>{datasets[0].data.reduce((a, b) => a + b, 0)}</span>
        Total visitors
      </p>
      <Doughnut ref={ref} data={data} height={height} options={options} />
    </div>
  );
};

ChartjsDonutChart.defaultProps = {
  height: 200,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    },
  ],

  options: {
    cutoutPercentage: 70,
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
      position: 'bottom',
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

ChartjsDonutChart.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};

const ChartjsDonutChart2 = props => {
  const { labels, datasets, options, height } = props;
  const { ref } = useChartData();
  const dataInfo = {
    labels,
    datasets,
  };

  return (
    <div>
      <Doughnut ref={ref} data={dataInfo} height={height} options={options} width={200} />

      <div className="align-center-v justify-content-between rd-labels">
        <div className="revenue-chat-label">
          {labels.map((label, key) => {
            return (
              <div key={key + 1} className="chart-label">
                <span className={`label-dot dot-${label}`} />
                {label}
              </div>
            );
          })}
        </div>
        <div className="revenue-chart-data">
          {datasets.map((item, key) => {
            const { data } = item;
            return (
              <div key={key + 1}>
                {data.map(value => {
                  return (
                    <p key={value}>
                      <strong>${value}</strong>
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="revenue-chat-percentage">
          <span>45%</span>
          <span>45%</span>
          <span>45%</span>
        </div>
      </div>
    </div>
  );
};

ChartjsDonutChart2.defaultProps = {
  height: 220,
  // width: 220,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    },
  ],

  options: {
    cutoutPercentage: 60,
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false,
      position: 'bottom',
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

ChartjsDonutChart2.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.arrayOf(PropTypes.string),
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};

const ChartjsDonut = props => {
  const { labels, datasets, options, height } = props;
  const { ref } = useChartData();
  const dataInfo = {
    labels,
    datasets,
  };

  return <Doughnut ref={ref} data={dataInfo} height={height} options={options} width={200} />;
};

ChartjsDonut.defaultProps = {
  height: 220,
  // width: 220,
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      data: [20, 20, 30, 5, 25],
      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
    },
  ],

  options: {
    cutoutPercentage: 60,
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      display: false,
      position: 'bottom',
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};

ChartjsDonut.propTypes = {
  height: PropTypes.number,
  labels: PropTypes.array,
  datasets: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.object,
};

export {
  ChartjsDonutChart,
  ChartjsDonutChart2,
  ChartjsPieChart,
  ChartjsBarChartGrad,
  ChartjsBarChartTransparent,
  ChartjsAreaChart,
  ChartjsLineChart,
  ChartjsStackedChart,
  // ChartjsHorizontalChart,
  ChartjsBarChart,
  ChartjsDonut,
};
