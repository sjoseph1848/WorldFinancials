//Chart Options
const options = {
  chart: {
    height: 350,
    width: 500,
    type: 'bar',
    background: '#f4f4f4',
    forecolor: '#333'
  },
  series: [
    {
      name: 'Debt In 2008',
      data: [191.81, 109.42, 74.54, 72.85, 68.06, 64.93]
    }
  ],
  xaxis: {
    categories: [
      'Japan',
      'Greece',
      'India',
      'United States',
      'France',
      'Germany'
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
