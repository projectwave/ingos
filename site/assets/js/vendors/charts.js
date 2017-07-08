'use strict';

$(function () {
    Highcharts.setOptions({
        colors: ['#ff6961', '#b6e329', '#1b7cd0', '#da62cc', '#00adeb', '#FF9655', '#FFF263', '#6AF9C4'],
        lang: {
            loading: 'Загрузка...',
            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            shortMonths: ['ЯНВ', 'ФЕВ', 'МАРТ', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕНТ', 'ОКТ', 'НОЯБ', 'ДЕК'],
            exportButtonTitle: "Экспорт",
            printButtonTitle: "Печать",
            rangeSelectorFrom: "С",
            rangeSelectorTo: "По",
            rangeSelectorZoom: "Период",
            downloadPNG: 'Скачать PNG',
            downloadJPEG: 'Скачать JPEG',
            downloadPDF: 'Скачать PDF',
            downloadSVG: 'Скачать SVG',
            printChart: 'Напечатать график'
        }
    });

    $('#unit-trust-detalization').highcharts({
        chart: {
            type: 'spline',
            spacingLeft: 0
        },
        title: false,
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%d <br> %b'
            },
            tickWidth: 0,
            labels: {
                overflow: 'justify',
                style: {
                    color: '#8c9196'
                },
                y: 25
            }
        },
        yAxis: {
            title: false,
            tickWidth: 0,
            lineWidth: 1,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            labels: {
                style: {
                    color: '#8c9196'
                }
            }
        },
        tooltip: {
            valueSuffix: '$'
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                marker: {
                    enabled: false
                },
                pointStart: Date.UTC(2015, 4, 15),
                pointInterval: 24 * 3600 * 1000 // one day
            },
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                    symbol: 'circle'
                }
            }
        },
        series: [{
            name: 'Опиф',
            color: '#00adeb',
            data: [29.9, 71.5, 106.4, 129.2, 144.0]
        }, {
            name: 'Индекс облигаций ММВБ',
            color: '#ff6961',
            data: [9.9, 1.5, 16.4, 29.2, 14.0]
        }],
        legend: {align: 'top', verticalAlign: 'top', x: 65, y: -10, borderWidth: 0}

    });

    $('#unit-trust-portfolio').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: -10,
            spacingBottom: -10,
            spacingLeft: -10,
            spacingRight: -10
        },
        title: {
            text: '<span class="chart-pie__title">Общая оценка</span><br> <span class="chart-pie__value">1 122 980,06 руб</span>',
            align: 'center',
            verticalAlign: 'middle',
            y: -5
        },
        tooltip: false,
        plotOptions: {
            pie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                size: '100%',
                startAngle: -200,
                endAngle: 160
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: 220,
            data: [
                ['Ингосстрах. Облигации',   59.69],
                ['Ингосстрах. Еврооблигации',       32.03],
                ['Ингосстрах. Риэл Эстейт', 8.28],
            ],
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    });

    $('#trust-managment-portfolio').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: -10,
            spacingBottom: -10,
            spacingLeft: -10,
            spacingRight: -10
        },
        title: {
            text: '<span class="chart-pie__title">Общая оценка</span><br> <span class="chart-pie__value">1 122 980,06 руб</span>',
            align: 'center',
            verticalAlign: 'middle',
            y: -5
        },
        tooltip: false,
        plotOptions: {
            pie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                size: '100%',
                startAngle: -200,
                endAngle: 160
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: 220,
            data: [
                ['Облигации',   86.78],
                ['Прочие вложения', 12.21],
                ['Денежные средства у брокера', 1.01],
            ],
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    });

    $('#portfolio-structure').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            spacingTop: -10,
            spacingBottom: -10,
            spacingLeft: -10,
            spacingRight: -10
        },
        title: {
            text: '<span class="chart-pie__title">Общая оценка портфеля</span><br> <span class="chart-pie__value">3 952 289,00 руб</span>',
            align: 'center',
            verticalAlign: 'middle',
            y: -5
        },
        tooltip: false,
        plotOptions: {
            pie: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                },
                size: '100%',
                startAngle: -200,
                endAngle: 160
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: 220,
            data: [
                ['Линейная P&G',   47.43],
                ['ИИС Рыночная', 25.49],
                ['Линейная Apple', 19.91],
                ['ИИС Рыночная', 4.38],
                ['Открытие – Облигации', 2.79]
            ],
            states: {
                hover: {
                    enabled: false
                }
            }
        }]
    });

    $('#trust-managment-portfolio-dynamics').highcharts({
        chart: {
            type: 'line',
            spacingLeft: 0
        },
        title: false,
        xAxis: {
            categories: [
                '1 <br> ЯНВ <br> 2011',
                '1 <br> ЯНВ <br> 2012',
                '1 <br> ЯНВ <br> 2013',
                '1 <br> ЯНВ <br> 2014',
                '1 <br> ЯНВ <br> 2015',
                '1 <br> ЯНВ <br> 2016',
                '1 <br> ЯНВ <br> 2017'
            ],
            tickWidth: 0,
        },

        yAxis: {
            title: false,
            tickWidth: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            labels: false
        },
        tooltip: {
            formatter: function () {
                return 'ТЕК. ОЦЕНКА: <b>' + this.y + '</b>';
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                marker: {
                    enabled: false
                }
            },
            series: {
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null,
                    symbol: 'circle'
                }
            }
        },
        series: [{
            color: '#00adeb',
            data: [3, 4, 3, 5, 4, 10, 8]
        }],
        legend: false

    });

    /* industry chart */
    var industryData = [
        ["Не определено", 1471.61],
        ["Государственные ценные бумаги", 460.87]];

    $('#industry-chart').highcharts({
        chart: {
            type: 'column',
            inverted: true,
            marginLeft: 360,
            height: 220
        },
        title: false,
        xAxis: {
            tickWidth: 0,
            labels: {
                align: 'left',
                x: -360,
                useHTML: true,
                enabled: true,
                formatter: function() { return '<div class="charts-column__data">'
                    + '<div class="charts-column__data-item">' + industryData[this.value][0] + '</div>'
                    + '<div class="charts-column__data-item _count">' + industryData[this.value][1] + '</div></div>';}
            }
        },
        yAxis: {
            title: false,
            lineWidth: 1

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: false,
        series: [{
            color: '#00adeb',
            pointWidth: 50,
            data: industryData
        }]

    });

    /* assets classes chart */
    var assetsClassesData = [
        ["Фонды", 5071.61]];

    $('#assets-classes-chart').highcharts({
        chart: {
            type: 'column',
            inverted: true,
            marginLeft: 360,
            height: 135
        },
        title: false,
        xAxis: {
            tickWidth: 0,
            labels: {
                align: 'left',
                x: -360,
                useHTML: true,
                enabled: true,
                formatter: function() { return '<div class="charts-column__data">'
                    + '<div class="charts-column__data-item">' + assetsClassesData[this.value][0] + '</div>'
                    + '<div class="charts-column__data-item _count">' + assetsClassesData[this.value][1] + '</div></div>';}
            }
        },
        yAxis: {
            title: false,
            lineWidth: 1

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: false,
        series: [{
            color: '#00adeb',
            pointWidth: 50,
            data: assetsClassesData
        }]

    });

    /* currency chart */
    var currencyData = [
        ["Российский рубль", 4952.48],
        ["Доллар США", 0],
        ["Евро", 0],
        ["Фунт стерлингов", 0],
        ["Японская Йена", 0],
        ["Швейцарский франк", 0]];

    $('#currency-chart').highcharts({
        chart: {
            type: 'column',
            inverted: true,
            marginLeft: 360,
            height: 400
        },
        title: false,
        xAxis: {
            tickWidth: 0,
            labels: {
                align: 'left',
                x: -360,
                useHTML: true,
                enabled: true,
                formatter: function() { return '<div class="charts-column__data">'
                    + '<div class="charts-column__data-item">' + currencyData[this.value][0] + '</div>'
                    + '<div class="charts-column__data-item _count">' + currencyData[this.value][1] + '</div></div>';}
            }
        },
        yAxis: {
            title: false,
            lineWidth: 1

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: false,
        series: [{
            color: '#00adeb',
            pointWidth: 30,
            data: currencyData
        }]

    });

    /* issuers chart */
    var issuersData = [
        ["МинФин России", 1728.99],
        ["ОАО «Силовые машины»", 267.1],
        ["Правительство Москвы в лице Департамента финансов г. Москвы", 263.82],
        ["ПАО «Магнит»", 258.95],
        ["ОАО «Акрон»", 245.25],
        ["ПАО «ВымпелКом»", 245.07],
        ["ООО «ИКС 5 ФИНАНС»", 225.79],
        ["АФК Система»", 206.85],
        ["ООО «МегаФон Финанс»", 202.41],
        ["ОАО «Полюс Золото»", 197.91],
        ["Другое", 1096.54]];

    $('#issuers-chart').highcharts({
        chart: {
            type: 'column',
            inverted: true,
            marginLeft: 360,
            height: 735
        },
        title: false,
        xAxis: {
            tickWidth: 0,
            labels: {
                align: 'left',
                x: -360,
                useHTML: true,
                enabled: true,
                formatter: function() { return '<div class="charts-column__data">'
                                            + '<div class="charts-column__data-item">' + issuersData[this.value][0] + '</div>'
                                            + '<div class="charts-column__data-item _count">' + issuersData[this.value][1] + '</div></div>';}
            }
        },
        yAxis: {
            title: false,
            lineWidth: 1

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: false,
        series: [{
            color: '#00adeb',
            pointWidth: 30,
            data: issuersData
        }]

    });
})