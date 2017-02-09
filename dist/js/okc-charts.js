google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawAgeNeverChart);
google.charts.setOnLoadCallback(drawAgeSometimesChart);
google.charts.setOnLoadCallback(drawAgeNeverChart);
function drawAgeNeverChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age Bracket', 'User'],
    ['18-21',     1860],
    ['26-30',     6453],
    ['31-40',     11232],
    ['41-50',     4767],
    ['51-60',     2071],
    ['61-70',     789]
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
      ['18-21',     2],
      ['26-30',     3],
      ['31-40',     6],
      ['41-50',     2],
      ['51-60',     5],
      ['61-70',     2]
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
    ['18-21',     2],
    ['26-30',     3],
    ['31-40',     6],
    ['41-50',     2],
    ['51-60',     5],
    ['61-70',     2]
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
