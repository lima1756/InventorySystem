// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor:"rgba(218, 150, 87,0.3)",
      borderColor:"rgba(218, 150, 87,1)",
      pointRadius:5,pointBackgroundColor:"rgba(231, 128, 44,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [154, 289, 262, 218, 233, 228, 220, 214, 203, 233, 221, 189],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 400,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Bar Chart Example
var ctx=document.getElementById("myBarChart");
var myLineChart=new Chart(ctx,{
  type:"bar",
  data:{
    labels:["Aulas 1","Aulas 2","Aulas 3","Aulas 4","Aulas 5","Aulas 6"],
    datasets:[{
      label:"Revenue",
      backgroundColor:"rgba(2,117,216,1)",
      borderColor:"rgba(2,117,216,1)",
      data:[34,53,25,41,21,18]
    }]
  },
  options:{
    scales:{
      xAxes:[{
        time:{
          unit:""
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Decomposed Projectors", "Proyectors without Waranty", "Projectors with Waranty"],
    datasets: [{
      data: [ 34, 156, 47],
      backgroundColor: [ '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
