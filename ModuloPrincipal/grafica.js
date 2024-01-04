var colors = ['#2E86C1', '#34495E', '#1E8449', '#6C3483', '#138D75', '#5D6D7E'];

var options = {
    series: [{
        name: 'Entradas',
        data: [21, 22, 10, 28]
    }],
    chart: {
        height: 150,
        type: 'bar',
        events: {
            click: function(chart, w, e) {
                // console.log(chart, w, e)
            }
        },
        // Añadir padding alrededor del gráfico
        margin: {
            top: 30,
            bottom: 30,
            right: 30,
            left: 30
        }
    },
    colors: colors,
    plotOptions: {
        bar: {
            columnWidth: '15%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [
            ['Calidad'],
            ['Almacen'],
            ['IT'],
            'Quimicos',
        ],
        labels: {
            style: {
                colors: colors,
                fontSize: '12px'
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
