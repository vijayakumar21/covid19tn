/*jshint esversion: 6 */

function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}
for (i in confirmed)

confirmed[i]=sortObject(confirmed[i]);
function sortObject(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}

for (i in tn)
tn[i]=sortObject(tn[i]);
for(i in tn){
var count=tn[i][Object.keys(tn[i])[Object.keys(tn[i]).length-1]];
var count2=tntotal[i]
console.log(count);
$('.new-'+i).html('✹♥\n+ '+count);
$('.total-'+i).html(count2);
}
$('.total-active').html(tntotal['confirmed']-(tntotal['deceased']+tntotal['recovered']));
var ctx = document.getElementById('myChart').getContext('2d');
var testedChart = new Chart.Line(ctx, {
  options: {
    elements: {
                    point:{
                        radius: 0
                    }},
    responsive: true,

     legend: {
            display: false
         },
    scales: {
      xAxes: [{
              display: false
          }],

      yAxes: [{

          display: false,
           // drawBorder: false
        }]

    }},
    data: {
        labels: Object.keys(tn['tested']),
        datasets: [{
            label: '#tested',
            data: $.map(tn['tested'], function(value, key) { return value }),
              backgrounColor:'#8DC5FD',
              fill:false,
            borderColor:
                '#72B1F0'

            ,
            borderWidth:1.5
        }]

    }
});

ctx = document.getElementById('conf').getContext('2d');
var testedChart = new Chart.Line(ctx, {
  options: {
    elements: {
                    point:{
                        radius: 0
                    }},
    responsive: true,

     legend: {
            display: false
         },
    scales: {
      xAxes: [{
              display: false
          }],

      yAxes: [{

          display: false,
           // drawBorder: false
        }]

    }},
    data: {
        labels: Object.keys(tn['confirmed']),
        datasets: [{
            label: '#confirmed',
            data: $.map(tn['confirmed'], function(value, key) { return value }),
              backgrounColor:'#F6BE59',
              fill:false,
            borderColor:
                '#F6B237'

            ,
            borderWidth:1.5
        }]

    }
});

ctx = document.getElementById('deaths').getContext('2d');
var testedChart = new Chart.Line(ctx, {
  options: {
    elements: {
                    point:{
                        radius: 0
                    }},
    responsive: true,

     legend: {
            display: false
         },
    scales: {
      xAxes: [{
              display: false
          }],

      yAxes: [{

          display: false,
           // drawBorder: false
        }]

    }},
    data: {
        labels: Object.keys(tn['deceased']),
        datasets: [{
            label: '#confirmed',
            data: $.map(tn['deceased'], function(value, key) { return value }),
              backgrounColor:'#CF91F2',
              fill:false,
            borderColor:
                '#CF91F2'

            ,
            borderWidth:1.5
        }]

    }
});
ctx = document.getElementById('rec').getContext('2d');
var testedChart = new Chart.Line(ctx, {
  options: {
    elements: {
                    point:{
                        radius: 0
                    }},
    responsive: true,

     legend: {
            display: false
         },
    scales: {
      xAxes: [{
              display: false
          }],

      yAxes: [{

          display: false,
           // drawBorder: false
        }]

    }},
    data: {
        labels: Object.keys(tn['recovered']),
        datasets: [{
            label: '#recovered',
            data: $.map(tn['recovered'], function(value, key) { return value }),
              backgrounColor:'#49F982',
              fill:false,
            borderColor:
                '#49F982'

            ,
            borderWidth:1.5
        }]

    }
});


ctx = document.getElementById('active').getContext('2d');
var testedChart = new Chart.Line(ctx, {
  options: {
    elements: {
                    point:{
                        radius: 0
                    }},
    responsive: true,

     legend: {
            display: false
         },
    scales: {
      xAxes: [{
              display: false
          }],

      yAxes: [{

          display: false,
           // drawBorder: false
        }]

    }},
    data: {
        labels: Object.keys(tn['confirmed']),
        datasets: [{
            label: '#recovered',
            data: $.map(tn['confirmed'], function(value, key) { return value }),
              backgrounColor:'#49F982',
              fill:false,
            borderColor:
                '#49F982'

            ,
            borderWidth:1.5
        }]

    }
});
