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
google.charts.setOnLoadCallback(drawOrientationNeverChart);
google.charts.setOnLoadCallback(drawOrientationSometimesChart);
google.charts.setOnLoadCallback(drawOrientationOftenChart);
google.charts.setOnLoadCallback(drawIndustryNeverChart);
google.charts.setOnLoadCallback(drawIndustrySometimesChart);
google.charts.setOnLoadCallback(drawIndustryOftenChart);
google.charts.setOnLoadCallback(drawIndustryNever2Chart);
google.charts.setOnLoadCallback(drawIndustrySometimes2Chart);
google.charts.setOnLoadCallback(drawIndustryOften2Chart);
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
    title: 'Never Does Drugs',
    titleTextStyle: { fontSize: 20,
    color: '300055',
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
      title: 'Does Drugs Sometimes',
      titleTextStyle: { fontSize: 20,
      color: '300055',
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
    title: 'Does Drugs Often',
    titleTextStyle: { fontSize: 20,
    color: '300055',
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
    title: 'Never Does Drugs',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
};

  var chart = new google.visualization.PieChart(document.getElementById('RaceNever'));
chart.draw(data, options);

}

  function drawRaceSometimesChart() {
    var data = google.visualization.arrayToDataTable([
      ['Race', 'Users'],
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
      title: 'Does Drugs Sometimes',
      titleTextStyle: { fontSize: 20,
      color: '300055',
    fontAlign: 'center'}
    };


      var chart = new google.visualization.PieChart(document.getElementById('RaceSometimes'));
    chart.draw(data, options);

}

function drawRaceOftenChart() {
  var data = google.visualization.arrayToDataTable([
    ['Race', 'Users'],
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
    title: 'Does Drugs Often',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
  };


    var chart = new google.visualization.PieChart(document.getElementById('RaceOften'));
  chart.draw(data, options);

}

function drawReligionNeverChart() {
  var data = google.visualization.arrayToDataTable([
    ['Religion', 'Users'],
    ['Agnostic',         4995],
    ['Atheist',          7295],
    ['Buddhist',          1212],
    ['Catholic',          3774],
    ['Other Christian',     4863],
    ['Hindu',              365],
    ['Muslim',           100],
    ['Jewish',           1855],
    ['Other',            4485]
  ]);

  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Never Does Drugs',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
};

  var chart = new google.visualization.PieChart(document.getElementById('ReligionNever'));
chart.draw(data, options);

}

  function drawReligionSometimesChart() {
    var data = google.visualization.arrayToDataTable([
      ['Religion', 'Users'],
      ['Agnostic',         1499],
      ['Atheist',          1537],
      ['Buddhist',          297],
      ['Catholic',          310],
      ['Other Christian',     328],
      ['Hindu',              26],
      ['Muslim',           18],
      ['Jewish',           384],
      ['Other',            1461]
    ]);

    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      title: 'Does Drugs Sometimes',
      titleTextStyle: { fontSize: 20,
      color: '300055',
    fontAlign: 'center'}
    };


      var chart = new google.visualization.PieChart(document.getElementById('ReligionSometimes'));
    chart.draw(data, options);

}

function drawReligionOftenChart() {
  var data = google.visualization.arrayToDataTable([
    ['Religion', 'Users'],
    ['Agnostic',         45],
    ['Atheist',          108],
    ['Buddhist',          15],
    ['Catholic',          20],
    ['Other Christian',     26],
    ['Hindu',              7],
    ['Muslim',           6],
    ['Jewish',           11],
    ['Other',            85]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Does Drugs Often',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
  };


    var chart = new google.visualization.PieChart(document.getElementById('ReligionOften'));
  chart.draw(data, options);

}

function drawOrientationNeverChart() {
  var data = google.visualization.arrayToDataTable([
    ['Orientation', 'Users'],
    ['Straight',     33093],
    ['Bisexual',     1084],
    ['Gay',          3545]
  ]);

  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Never Does Drugs',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
};

  var chart = new google.visualization.PieChart(document.getElementById('OrientationNever'));
chart.draw(data, options);

}

  function drawOrientationSometimesChart() {
    var data = google.visualization.arrayToDataTable([
      ['Orientation', 'Users'],
      ['Straight',     6129],
      ['Bisexual',     869],
      ['Gay',          685]
    ]);

    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      title: 'Does Drugs Sometimes',
      titleTextStyle: { fontSize: 20,
      color: '300055',
    fontAlign: 'center'}
    };


      var chart = new google.visualization.PieChart(document.getElementById('OrientationSometimes'));
    chart.draw(data, options);

}

function drawOrientationOftenChart() {
  var data = google.visualization.arrayToDataTable([
    ['Orientation', 'Users'],
    ['Straight',     323],
    ['Bisexual',     56],
    ['Gay',          31]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Does Drugs Often',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
  };


    var chart = new google.visualization.PieChart(document.getElementById('OrientationOften'));
  chart.draw(data, options);

}


function drawIndustryNeverChart() {
  var data = google.visualization.arrayToDataTable([
    ['Industry', 'Users'],
    ['art / music / writing / entertainment',           3384],
    ['financial / real estate / sales / marketing',     4613],
    ['clerical / admin / management',                   2249],
    ['computers / software',                            2911],
    ['science / engineering',                           3127],
    ['construction / trades',                           646],
    ['hospitality / travel / transportation',           1040],
    ['law',                                             894],
    ['healthcare',                                      2657],
    ['politics',                                        496],
    ['military',                                        183],
    ['education / academia',                            2261],
    ['student',                                         3093],
    ['retired',                                         168],
    ['unemployed',                                      154],
    ['rather not say / other',                          4614]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Never Does Drugs',
    titleTextStyle: { color: 'transparent',
  fontSize: 20,
  fontAlign: 'center'}
};

  var chart = new google.visualization.PieChart(document.getElementById('IndustryNever'));
chart.draw(data, options);

}

  function drawIndustrySometimesChart() {
    var data = google.visualization.arrayToDataTable([
      ['Industry', 'Users'],
      ['art / music / writing / entertainment',           4073],
      ['financial / real estate / sales / marketing',     1671],
      ['clerical / admin / management',                   810],
      ['computers / software',                            1959],
      ['science / engineering',                           1581],
      ['construction / trades',                           511],
      ['hospitality / travel / transportation',           999],
      ['law',                                             182],
      ['healthcare',                                      801],
      ['politics',                                        176],
      ['military',                                        24],
      ['education / academia',                            1083],
      ['student',                                         2396],
      ['retired',                                         114],
      ['unemployed',                                      222],
      ['rather not say / other',                          3756]
    ]);

    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      title: 'Does Drugs Sometimes',
      titleTextStyle: { fontSize: 20,
      color: '300055',
    fontAlign: 'center'}
    };


      var chart = new google.visualization.PieChart(document.getElementById('IndustrySometimes'));
    chart.draw(data, options);

}

function drawIndustryOftenChart() {
  var data = google.visualization.arrayToDataTable([
    ['Industry', 'Users'],
    ['art / music / writing / entertainment',           83],
    ['financial / real estate / sales / marketing',     29],
    ['clerical / admin / management',                   8],
    ['computers / software',                            22],
    ['science / engineering',                           17],
    ['construction / trades',                           7],
    ['hospitality / travel / transportation',           13],
    ['law',                                             4],
    ['healthcare',                                      15],
    ['politics',                                        4],
    ['military',                                        5],
    ['education / academia',                            12],
    ['student',                                         53],
    ['retired',                                         4],
    ['unemployed',                                      20],
    ['rather not say / other',                          71]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Does Drugs Often',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
  };


    var chart = new google.visualization.PieChart(document.getElementById('IndustryOften'));
  chart.draw(data, options);

}


function drawIndustryNever2Chart() {
  var data = google.visualization.arrayToDataTable([
    ['Industry', 'Users'],
    ['art / music / writing / entertainment',           3384],
    ['financial / real estate / sales / marketing',     4613],
    ['clerical / admin / management',                   2249],
    ['computers / software',                            2911],
    ['science / engineering',                           3127],
    ['construction / trades',                           646],
    ['hospitality / travel / transportation',           1040],
    ['law',                                             894],
    ['healthcare',                                      2657],
    ['politics',                                        496],
    ['military',                                        183],
    ['education / academia',                            2261]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Never Does Drugs',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
};

  var chart = new google.visualization.PieChart(document.getElementById('IndustryNever2'));
chart.draw(data, options);

}

  function drawIndustrySometimes2Chart() {
    var data = google.visualization.arrayToDataTable([
      ['Industry', 'Users'],
      ['art / music / writing / entertainment',           4073],
      ['financial / real estate / sales / marketing',     1671],
      ['clerical / admin / management',                   810],
      ['computers / software',                            1959],
      ['science / engineering',                           1581],
      ['construction / trades',                           511],
      ['hospitality / travel / transportation',           999],
      ['law',                                             182],
      ['healthcare',                                      801],
      ['politics',                                        176],
      ['military',                                        24],
      ['education / academia',                            1083]
    ]);

    var options = {
      pieHole: 0.4,
      backgroundColor: 'transparent',
      title: 'Does Drugs Sometimes',
      titleTextStyle: { fontSize: 20,
      color: '300055',
    fontAlign: 'center'}
    };


      var chart = new google.visualization.PieChart(document.getElementById('IndustrySometimes2'));
    chart.draw(data, options);

}

function drawIndustryOften2Chart() {
  var data = google.visualization.arrayToDataTable([
    ['Industry', 'Users'],
    ['art / music / writing / entertainment',           83],
    ['financial / real estate / sales / marketing',     29],
    ['clerical / admin / management',                   8],
    ['computers / software',                            22],
    ['science / engineering',                           17],
    ['construction / trades',                           7],
    ['hospitality / travel / transportation',           13],
    ['law',                                             4],
    ['healthcare',                                      15],
    ['politics',                                        4],
    ['military',                                        5],
    ['education / academia',                            12]
  ]);


  var options = {
    pieHole: 0.4,
    backgroundColor: 'transparent',
    title: 'Does Drugs Often',
    titleTextStyle: { fontSize: 20,
    color: '300055',
  fontAlign: 'center'}
  };


    var chart = new google.visualization.PieChart(document.getElementById('IndustryOften2'));
  chart.draw(data, options);

}
