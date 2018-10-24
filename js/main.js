//Chart Options
const options = {
  chart: {
    height: 350,
    width: 650,
    type: 'bar',
    background: '#f4f4f4',
    forecolor: '#333'
  },
  series: [
    {
      name: 'Population',
      data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
    }
  ],
  xaxis: {
    categories: [
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'Philadelphia',
      'Phoenix',
      'San Antonio',
      'San Diego',
      'Dallas',
      'San Jose'
    ]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ['#f44336']
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Largest US Cities by Population',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }
  }
};
//Init Chart
//two inputs 'where it is going- chart, then options above
const chart = new ApexCharts(document.querySelector('#chart'), options);
//Render Chart
chart.render();
setTimeout(function() {
  chart.update();
}, 1000);
