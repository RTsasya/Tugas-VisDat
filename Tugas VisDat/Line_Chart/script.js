var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#cc6300", "#b1b83b"],
    series: [
      {
        name: "Non Migas",
        data: [55196.3, 63187.9, 55348, 70201.5, 84493.8, 92028.7, 92055.9, 98865, 98784.2, 103699.7, 110379.2, 122503.3]
      },
      {
        name: "Migas",
        data: [34739.3, 35476.5, 36006.5, 40499.5, 43727.8, 44255, 49053.7, 48869.4, 48309.1, 48325.6, 50370.1, 49216.1]
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
          color: "#cc6300"
        },
        labels: {
          style: {
            colors: "#cc6300"
          }
        },
        title: {
          text: "Volume (Ribu Ton)",
          style: {
            color: "#cc6300"
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
          color: "#b1b83b"
        },
        labels: {
          style: {
            colors: "#b1b83b"
          }
        },
        title: {
          text: "Volume (Ribu Ton)",
          style: {
            color: "#b1b83b"
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
  