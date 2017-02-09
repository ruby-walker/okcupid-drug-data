google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawAgeNeverChart);
google.charts.setOnLoadCallback(drawAgeSometimesChart);
google.charts.setOnLoadCallback(drawAgeOftenChart);
function drawAgeNeverChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age Bracket', 'User'],
    ['18-21',     1860],
    ['22-25',     6453],
    ['26-30',     10551],
    ['31-40',     11232],
    ['41-50',     4767],
    ['51+',     2860]
  ]);

  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    titleTextStyle: { color: 'transparent',
  fontSize: 20,
  fontAlign: 'center'}
};

  var chart = new google.visualization.PieChart(document.getElementById('AgeNever'));
chart.draw(data, options);

}

  function drawAgeSometimesChart() {
    var data = google.visualization.arrayToDataTable([
      ['Age Bracket', 'User'],
      ['18-21',     767],
      ['22-25',     1979],
      ['26-30',     2375],
      ['31-40',     1904],
      ['41-50',     556],
      ['51+',     250],
    ]);

    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      legend: {
        position: 'none'
      },
      titleTextStyle: { color: 'transparent',
    fontSize: 20,
    fontAlign: 'center'}
    };


      var chart = new google.visualization.PieChart(document.getElementById('AgeSometimes'));
    chart.draw(data, options);

}

function drawAgeOftenChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age Bracket', 'User'],
    ['18-21',     103],
    ['22-25',     132],
    ['26-30',     91],
    ['31-40',     59],
    ['41-50',     13],
    ['51+',       5]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    legend: {
      position: 'none'
    },
    titleTextStyle: { color: 'transparent',
  fontSize: 20,
  fontAlign: 'center'}
  };


    var chart = new google.visualization.PieChart(document.getElementById('AgeOften'));
  chart.draw(data, options);

}
