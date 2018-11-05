//Chart Options
const options = {
  chart: {
    height: 650,
    width: 650,
    type: 'bar',
    background: '#f4f4f4',
    forecolor: '#333'
  },
  series: [
    {
      name: 'Debt In 2008',
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
    text: 'Debt in 2008 (in billions)',
    align: 'center',
    margin: 10,
    offsetY: 20,
    style: {
      fontSize: '20px'
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
