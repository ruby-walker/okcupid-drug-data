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
    ['Age Bracket', 'Users'],
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
      ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
    ['Race', 'Users'],
    ['White',             9794],
    ['Black',             386],
    ['Black / White',     134],
    ['Hispanic',          674],
    ['Asian',             762],
    ['Indian',            108],
    ['Middle Eastern',    86],
    ['Pacific Islander',  198],
    ['Native American',   18],
    ['Other',             1984]
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
      ['Age Bracket', 'Users'],
      ['White',             4898],
      ['Black',             195],
      ['Black / White',     66],
      ['Hispanic',          338],
      ['Asian',             381],
      ['Indian',            55],
      ['Middle Eastern',    43],
      ['Pacific Islander',  100],
      ['Native American',   10],
      ['Other',             992]
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
    ['Age Bracket', 'Users'],
    ['White',             220],
    ['Black',             23],
    ['Black / White',     7],
    ['Hispanic',          45],
    ['Asian',             13],
    ['Indian',            1],
    ['Middle Eastern',    3],
    ['Pacific Islander',  5],
    ['Native American',   2],
    ['Other',             66]
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
    ['Age Bracket', 'Users'],
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
      ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
      ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
      ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
      ['Age Bracket', 'Users'],
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
    ['Age Bracket', 'Users'],
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
