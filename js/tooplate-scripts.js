const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Hits"
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Latest Hits",
            data: [88, 68, 79, 57, 50, 55, 70],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          },
          {
            label: "Popular Hits",
            data: [33, 45, 37, 21, 55, 74, 69],
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          },
          {
            label: "Featured",
            data: [44, 19, 38, 46, 85, 66, 79],
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            cubicInterpolationMode: "monotone",
            pointRadius: 0
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Resultado"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */

    configBar = {
      type: "horizontalBar",
      data: {
        labels: [ "Vitórias","Empates", "Derrotas"],
        datasets: [
          {
            labels: [
              "Vitórias",
              "Empates",
              "Derrotas"
            ],
            data: [14, 3, 3],
            backgroundColor: [
              "#A8D582",
              "#D7D768",
              "#F7604D"
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [67.86 , 32.14],
            backgroundColor: ["#4ED6B8", "#F7604D"],
            label: "Jogos Realizados e Por Realizar"
          }
        ],
        labels: [
          "Jogos Não Realizados(%)",
          "Jogos Realizados(%)"
        ]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }



  
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

  new Chart(document.getElementById("horizontalBar"), {
    "type": "horizontalBar",
    "data": {
    "labels": ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
    "datasets": [{
    "label": "My First Dataset",
    "data": [22, 33, 55, 12, 86, 23, 14],
    "fill": false,
    "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
    ],
    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
    "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"
    ],
    "borderWidth": 1
    }]
    },
    "options": {
    "scales": {
    "xAxes": [{
    "ticks": {
    "beginAtZero": true
    }
    }]
    }
    }
    });
    
