google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawAgeNeverChart);
google.charts.setOnLoadCallback(drawAgeSometimesChart);
google.charts.setOnLoadCallback(drawAgeOftenChart);
google.charts.setOnLoadCallback(drawRaceNeverChart);
google.charts.setOnLoadCallback(drawRaceSometimesChart);
google.charts.setOnLoadCallback(drawRaceOftenChart);
google.charts.setOnLoadCallback(drawReligionNeverChart);
google.charts.setOnLoadCallback(drawReligionSometimesChart);
google.charts.setOnLoadCallback(drawReligionOftenChart);
google.charts.setOnLoadCallback(drawDrinkingNeverChart);
google.charts.setOnLoadCallback(drawDrinkingSometimesChart);
google.charts.setOnLoadCallback(drawDrinkingOftenChart);
google.charts.setOnLoadCallback(drawOrientationNeverChart);
google.charts.setOnLoadCallback(drawOrientationSometimesChart);
google.charts.setOnLoadCallback(drawOrientationOftenChart);
google.charts.setOnLoadCallback(drawIndustryNeverChart);
google.charts.setOnLoadCallback(drawIndustrySometimesChart);
google.charts.setOnLoadCallback(drawIndustryOftenChart);
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

function drawRaceNeverChart() {
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

  var chart = new google.visualization.PieChart(document.getElementById('RaceNever'));
chart.draw(data, options);

}

  function drawRaceSometimesChart() {
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


      var chart = new google.visualization.PieChart(document.getElementById('RaceSometimes'));
    chart.draw(data, options);

}

function drawRaceOftenChart() {
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


    var chart = new google.visualization.PieChart(document.getElementById('RaceOften'));
  chart.draw(data, options);

}

function drawReligionNeverChart() {
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

  var chart = new google.visualization.PieChart(document.getElementById('ReligionNever'));
chart.draw(data, options);

}

  function drawReligionSometimesChart() {
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


      var chart = new google.visualization.PieChart(document.getElementById('ReligionSometimes'));
    chart.draw(data, options);

}

function drawReligionOftenChart() {
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


    var chart = new google.visualization.PieChart(document.getElementById('ReligionOften'));
  chart.draw(data, options);

}

function drawDrinkingNeverChart() {
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

  var chart = new google.visualization.PieChart(document.getElementById('DrinkingNever'));
chart.draw(data, options);

}

  function drawDrinkingSometimesChart() {
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


      var chart = new google.visualization.PieChart(document.getElementById('DrinkingSometimes'));
    chart.draw(data, options);

}

function drawDrinkingOftenChart() {
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


    var chart = new google.visualization.PieChart(document.getElementById('DrinkingOften'));
  chart.draw(data, options);

}


function drawOrientationNeverChart() {
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

  var chart = new google.visualization.PieChart(document.getElementById('OrientationNever'));
chart.draw(data, options);

}

  function drawOrientationSometimesChart() {
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


      var chart = new google.visualization.PieChart(document.getElementById('OrientationSometimes'));
    chart.draw(data, options);

}

function drawOrientationOftenChart() {
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


    var chart = new google.visualization.PieChart(document.getElementById('OrientationOften'));
  chart.draw(data, options);

}


function drawIndustryNeverChart() {
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

  var chart = new google.visualization.PieChart(document.getElementById('IndustryNever'));
chart.draw(data, options);

}

  function drawIndustrySometimesChart() {
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


      var chart = new google.visualization.PieChart(document.getElementById('IndustrySometimes'));
    chart.draw(data, options);

}

function drawIndustryOftenChart() {
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


    var chart = new google.visualization.PieChart(document.getElementById('IndustryOften'));
  chart.draw(data, options);

}
