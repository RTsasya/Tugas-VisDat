var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#b83ba9", "#a33737"],
    series: [
      {
        name: "Non Migas",
        data: [297062.6, 310253.1, 332926.3, 422921.7, 523165.9, 551690.6, 655963.2, 507722.4, 463862.5, 468399.3, 503341.6, 571852]
      },
      {
        name: "Migas",
        data: [45710.9, 44800.9, 46072.8, 55925.1, 59053.9, 48446, 44041.9, 41743.1, 44964.7, 43328.8, 42505, 37055.5]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#b83ba9"
        },
        labels: {
          style: {
            colors: "#b83ba9"
          }
        },
        title: {
          text: "Volume (Ribu Ton)",
          style: {
            color: "#b83ba9"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#a33737"
        },
        labels: {
          style: {
            colors: "#a33737"
          }
        },
        title: {
          text: "Volume (Ribu Ton)",
          style: {
            color: "#a33737"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();
  