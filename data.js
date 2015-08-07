(function() {
    'use strict';
    var popChart = {
        'type': 'pie3d',
        'series': [{
            'text': 'Java',
            'values': [19.274]
        }, {
            'text': 'C',
            'values': [14.732]
        }, {
            'text': 'C++',
            'values': [7.735]
        }, {
            'text': 'C#',
            'values': [4.837]
        }, {
            'text': 'Python',
            'values': [4.066]
        }, {
            'text': 'Objective-C',
            'values': [3.195]
        }, {
            'text': 'PHP',
            'values': [2.729]
        }, {
            'text': 'Visual Basic .NET',
            'values': [2.708]
        }, {
            'text': 'JavaScript',
            'values': [2.162]
        }, {
            'text': 'Everything else',
            'values': [38.562]
        }]
    };

    var salChart = {
        'type': 'bar',
        'legend': {},
        'scale-x': {
            'label': {
                'text': 'Language'
            }
        },
        'scale-y': {
            'label': {
                'text': 'Annual salary (1,000 USD)'
            }
        },
        'series': [{
            'text': 'Java',
            'values': [95]
        }, {
            'text': 'C',
            'values': [93]
        }, {
            'text': 'C++',
            'values': [93]
        }, {
            'text': 'C#',
            'values': [93]
        }, {
            'text': 'Python',
            'values': [96]
        }, {
            'text': 'Objective-C',
            'values': [88]
        }, {
            'text': 'PHP',
            'values': [72]
        },{
            'text': 'JavaScript',
            'values': [87]
        }]
    };

    window.onload = function() {
        zingchart.render({
            id: 'popChartDiv',
            height: 400,
            width: 600,
            data: popChart
        });

        zingchart.render({
            id: 'salChartDiv',
            height: 400,
            width: 600,
            data: salChart
        });
    };

})();