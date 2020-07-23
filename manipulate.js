/*jshint esversion: 6 */

var theme=$('.theme');


theme.click(func());
function func(){
if(theme==='☼'){
  theme.html('🔆');
}}

function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function(result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}
for ( var i in confirmed){

  confirmed[i] = sortObject(confirmed[i]);

  recovered[i]=sortObject(recovered[i]);
  deceased[i]=sortObject( deceased[i]);
}

function sortObject(obj) {
  return Object.keys(obj).sort().reduce(function(result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

for (i in tn)
  tn[i] = sortObject(tn[i]);
for (i in tn) {
  var count = tn[i][Object.keys(tn[i])[Object.keys(tn[i]).length - 1]];
  var count2 = tntotal[i]

  $('.new-' + i).html('+ ' + count);
  $('.total-' + i).html(count2);
}
$('.total-active').html(tntotal['confirmed'] - (tntotal['deceased'] + tntotal['recovered']));
var ctx = document.getElementById('myChart').getContext('2d');
var testedChartTN = new Chart.Line(ctx, {
  options: {
    elements: {
      point: {
        radius: 0
      }

    },
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

    }
  },
  data: {
    labels: Object.keys(tn['tested']),
    datasets: [{
      label: '#tested',
      data: $.map(tn['tested'], function(value, key) {
        return value;
      }),
      backgrounColor: '#8DC5FD',
      fill: false,
      borderColor: '#72B1F0',cubicInterpolationMode: 'monotone',
      borderWidth: 1.5
    }]

  }
});

ctx = document.getElementById('conf').getContext('2d');
var totalChartTN = new Chart.Line(ctx, {
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
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

    }
  },
  data: {
    labels: Object.keys(tn['confirmed']),
    datasets: [{
      label: '#confirmed',
      data: $.map(tn['confirmed'], function(value, key) {
        return value
      }),
      backgrounColor: '#F6BE59',
      fill: false,
      borderColor: '#F6B237'

        ,
      borderWidth: 1.5
    }]

  }
});

ctx = document.getElementById('deaths').getContext('2d');
var deathsChartTN = new Chart.Line(ctx, {
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
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

    }
  },
  data: {
    labels: Object.keys(tn['deceased']),
    datasets: [{
      label: '#confirmed',
      data: $.map(tn['deceased'], function(value, key) {
        return value
      }),
      backgrounColor: '#CF91F2',
      fill: false,
      borderColor: '#CF91F2'

        ,
      borderWidth: 1.5
    }]

  }
});
ctx = document.getElementById('rec').getContext('2d');
var recoveredChartTN = new Chart.Line(ctx, {
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
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

    }
  },
  data: {
    labels: Object.keys(tn['recovered']),
    datasets: [{
      label: '#recovered',
      data: $.map(tn['recovered'], function(value, key) {
        return value
      }),
      backgrounColor: '#49F982',
      fill: false,
      borderColor: '#82E3A1'

        ,
      borderWidth: 1.5
    }]

  }
});


ctx = document.getElementById('active').getContext('2d');
var activeChartTN = new Chart.Line(ctx, {
  options: {
    elements: {
      point: {
        radius: 0
      }
    },
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

    }
  },
  data: {
    labels: Object.keys(tn['confirmed']),
    datasets: [{
      label: '#recovered',
      data: $.map(tn['confirmed'], function(value, key) {
        return value
      }),
      backgrounColor: '#49F982',
      fill: false,
      borderColor: '#49F982'

        ,
      borderWidth: 1.5
    }]

  }
});



var totalChart, recoveredChart, deceasedChart, activeChart;

function tamilNaduOnly(){
var ctx = document.getElementById('totaldist').getContext('2d');
totalChart = new Chart.Line(ctx, {

  options: {
    elements: {
      point: {
        radius: 2

      }
    },
    responsive: true,

    legend: {
      display: false
    },
    scales: {
      xAxes: [{  ticks: {
          fontColor: "#FFD19B",
        },
        gridLines: {
        lineWidth:1.5,
          color:'#F8AF5A',drawOnChartArea:false

        }

      }],

      yAxes: [{
        ticks: {
          fontColor: "#FFD19B"
        },

        gridLines: {

          lineWidth:1.5,
          color:'#F8AF5A',drawOnChartArea:false

        }

      }]

    }
  },
  data: {
    labels: $.map(tn['confirmed'], function(value, key) {
      var v=new Date(key);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(v);
     const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(v);

      return (`${da} ${mo}`);
    }),
    datasets: [{
      label: '#confirmed',
      data: $.map(tn['confirmed'], function(value, key) {
        return value;
      }),

      fill: false,borderColor: '#EB9734',
      borderWidth: 2
    }]

  }
});

var ctx = document.getElementById('recoveredDist').getContext('2d');
recoveredChart = new Chart.Line(ctx, {

  options: {
    elements: {
      point: {
        radius: 2
      }
    },
    responsive: true,

    legend: {
      display: false
    },
    scales: {
      xAxes: [{  ticks: {
          fontColor: "#A3F0BC",
        },
        gridLines: {
        lineWidth:1.5,
          color:'#82E3A1',drawOnChartArea:false

        }

      }],

      yAxes: [{
        ticks: {
          fontColor: "#A3F0BC"
        },

        gridLines: {

          lineWidth:1.5,
          color:'#82E3A1',drawOnChartArea:false

        }

      }]

    }
  },
  data: {
    labels: $.map(tn['recovered'], function(value, key) {
      var v=new Date(key);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(v);
     const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(v);

      return (`${da} ${mo}`);
    }),
    datasets: [{
      label: '#recovered',
      data: $.map(tn['recovered'], function(value, key) {
        return value;
      }),

      fill: false,borderColor: '#62D387'

        ,
      borderWidth: 2
    }]

  }
});

var ctx2 = document.getElementById('deceasedDist').getContext('2d');
deceasedChart = new Chart.Line(ctx2, {

  options: {
    elements: {
      point: {
        radius: 2
      }
    },
    responsive: true,

    legend: {
      display: false
    },
    scales: {
      xAxes: [{  ticks: {
          fontColor: "#DB99FF",
        },
        gridLines: {
        lineWidth:1.5,
          color:'#C781ED',drawOnChartArea:false

        }

      }],

      yAxes: [{
        ticks: {
          fontColor: "#DB99FF"
        },

        gridLines: {

          lineWidth:1.5,
          color:'#C781ED',drawOnChartArea:false

        }

      }]

    }
  },
  data: {
    labels: $.map(tn['deceased'], function(value, key) {
      var v=new Date(key);
      const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(v);
     const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(v);
      return (`${da} ${mo}`);
    }),
    datasets: [{
      label: '#Deaths',
      data: $.map(tn['deceased'], function(value, key) {
        return value;
      }),

      fill: false,borderColor: '#CA6CFE'

        ,
      borderWidth: 2
    }]

  }
});
}


tamilNaduOnly();











var districts = ['Tamil Nadu', 'Tiruppur', 'Ranipet', 'Ramanathapuram', 'Karur', 'Coimbatore', 'Chennai', 'Erode', 'Ariyalur', 'Chengalpattu', 'Viluppuram', 'Tiruvannamalai', 'Nagapattinam', 'Tenkasi', 'Namakkal', 'Theni', 'Kanyakumari', 'Dharmapuri', 'Thoothukkudi', 'Perambalur', 'Tirupathur', 'Cuddalore', 'Vellore', 'Kancheepuram', 'Thiruvallur', 'Nilgiris', 'Dindigul', 'Madurai', 'Tirunelveli', 'Sivaganga', 'Pudukkottai', 'Thiruvarur', 'Krishnagiri', 'Tiruchirappalli', 'Virudhunagar', 'Salem', 'Thanjavur', 'Kallakurichi', 'Airport Quarantine', 'Other State', 'Railway Quarantine'];
l = []
var selectBox = document.getElementById('district');
for (var i in districts) {
  var newOption = document.createElement("option");
  newOption.text = districts[i];

  selectBox.add(newOption, undefined);

}

var selOption;



selectBox.onchange = function() {
  totalChart.destroy();
  recoveredChart.destroy();
  deceasedChart.destroy();
  // activeChart.destroy();

  for(var i in recovered){
  recovered[i]=sortObject(recovered[i]);
  deceased[i]=sortObject(deceased[i]);}
  selOption = selectBox.options[selectBox.selectedIndex].text;
  $('#selectedPlace').html(selOption);
  if(selOption=='Tamil Nadu')
  tamilNaduOnly();
  else{
  var ctx = document.getElementById('totaldist').getContext('2d');
  totalChart = new Chart.Line(ctx, {
    options: {

      elements: {
        point: {
          radius: 2,
          color:'#EB9734', animation: {
            onProgress: function(animation) {
                progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
            }
        }

        },
        line: {
      cubicInterpolationMode: 'linear'
    }

      },
      responsive: true,


      legend: {
        display: false
      },
      scales: {
        xAxes: [{  ticks: {
            fontColor: "#FEC076",stepSize:10
          },
          gridLines: {
          lineWidth:1.5,
            color:'#F8AF5A',drawOnChartArea:false

          }

        }],

        yAxes: [{
          ticks: {
            fontColor: "#FEC076"
          },

          gridLines: {

            lineWidth:1.5,
            color:'#F8AF5A',drawOnChartArea:false

          }

        }]

      }
    },
    data: {
      labels:  $.map(confirmed[selOption], function(value, key) {
        var v=new Date(key);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(v);
       const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(v);

        return (`${da} ${mo}`);
      }),
      datasets: [{
        label: '#total',
        data: $.map(confirmed[selOption], function(value, key) {

          return (value);
        }),

        fill: false,
        borderColor: '#EB9734',
        borderWidth: 2
      }]

    }
  });

  var ctx1 = document.getElementById('recoveredDist').getContext('2d');
  recoveredChart = new Chart.Line(ctx1, {

    options: {
      elements: {
        point: {
          radius: 2
        }
      },
      responsive: true,

      legend: {
        display: false
      },
      scales: {
        xAxes: [{  ticks: {
            fontColor: "#A3F0BC",
          },
          gridLines: {
          lineWidth:1.5,
            color:'#82E3A1',drawOnChartArea:false

          }

        }],

        yAxes: [{
          ticks: {
            fontColor: "#A3F0BC"
          },

          gridLines: {

            lineWidth:1.5,
            color:'#82E3A1',drawOnChartArea:false

          }

        }]

      }
    },
    data: {
      labels: $.map(recovered[selOption], function(value, key) {
        var v=new Date(key);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(v);
       const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(v);
        return (`${da} ${mo}`);
      }),
      datasets: [{
        label: '#recovered',
        data: $.map(recovered[selOption], function(value, key) {
          return value;
        }),

        fill: false,borderColor: '#62D387'

          ,
        borderWidth: 2
      }]

    }
  });




  var ctx2 = document.getElementById('deceasedDist').getContext('2d');
  deceasedChart = new Chart.Line(ctx2, {

    options: {
      elements: {
        point: {
          radius: 2
        }
      },
      responsive: true,

      legend: {
        display: false
      },
      scales: {
        xAxes: [{  ticks: {
            fontColor: "#DB99FF",
          },
          gridLines: {
          lineWidth:1.5,
            color:'#C781ED',drawOnChartArea:false

          }

        }],

        yAxes: [{
          ticks: {
            fontColor: "#DB99FF"
          },

          gridLines: {

            lineWidth:1.5,
            color:'#C781ED',drawOnChartArea:false

          }

        }]

      }
    },
    data: {
      labels: $.map(deceased[selOption], function(value, key) {
        var v=new Date(key);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(v);
       const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(v);
        return (`${da} ${mo}`);
      }),
      datasets: [{
        label: '#Deaths',
        data: $.map(deceased[selOption], function(value, key) {
          return value;
        }),

        fill: false,borderColor: '#CA6CFE'

          ,
        borderWidth: 2
      }]

    }
  });}
};
