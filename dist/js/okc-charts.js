google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
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
    backgroundColor: '#780074',
    legend: {
      position: 'none'
    },
    titleTextStyle: { color: 'transparent',
  fontSize: 20,
  fontAlign: 'center'}
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}
