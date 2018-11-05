//Chart Options
const choices = {
  chart: {
    height: 350,
    width: 500,
    type: 'bar',
    background: '#f4f4f4',
    forecolor: '#333'
  },
  series: [
    {
      name: 'Debt In 2015',
      data: [247.98, 176.94, 69.07, 105.15, 96.14, 70.99]
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
    text: 'Debt in 2015 (GDP to Debt Ratio)',
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
const bars = new ApexCharts(document.querySelector('#bars'), choices);
//Render Chart
bars.render();
setTimeout(function() {
  bars.update();
}, 1000);
