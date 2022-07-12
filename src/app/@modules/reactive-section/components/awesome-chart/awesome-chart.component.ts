import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import { IChartOptions } from "src/app/@library/site.interfaces";
import { seriesData, seriesDataLinear } from "../../../../@services/ohlc";
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-awesome-chart',
  templateUrl: './awesome-chart.component.html',
  styleUrls: ['./awesome-chart.component.scss']
})
export class AwesomeChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCandle') chartCandle: ChartComponent = {} as ChartComponent;
  @ViewChild('chartBar') chartBar: ChartComponent = {} as ChartComponent;
  chartCandleOptions: Partial<IChartOptions> | any = {} as IChartOptions;
  chartBarOptions: Partial<IChartOptions> | any = {} as IChartOptions;
  showChart: boolean = false;

  lottieOptions: AnimationOptions = {
    path: '/assets/lottie-files/loading-chart.json',
  };

  lottieStyles = {
    width: '480px',
    margin: '0 auto',
  }


  constructor() {
    // chart
    this.chartCandleOptions = {
      series: [],
      noData: {
        text: "No Data",
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: '#000000',
          fontSize: '14px'
        }
      },
      chart: {
        type: "candlestick",
        height: 480,
        id: "candles",
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: true,
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#3C90EB",
            downward: "#DF7D46"
          }
        }
      },
      dataLabels: {
        enabled: true,
      },
      grid: {
        show: true,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        show: false,
        type: "datetime"
      },
      yaxis: {
        show: true,
        opposite: true
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            height: 480,
          }
        }
      ]
    };

    // chart bar which is for brush chart data
    this.chartBarOptions = {
      series: [],
      chart: {
        height: 240,
        type: "bar",
        brush: {
          enabled: true,
          target: "candles"
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("20 Jan 2017").getTime(),
            max: new Date("10 Dec 2017").getTime()
          },
          fill: {
            color: "#ccc",
            opacity: 0.4
          },
          stroke: {
            color: "#0D47A1"
          }
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: "#F15B46"
              },
              {
                from: 1,
                to: 10000,
                color: "#FEB019"
              }
            ]
          }
        }
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          offsetX: 13
        }
      },
      yaxis: {
        show: true,
        opposite: true
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            height: 480,
          }
        }
      ]
    };

  }

  ngOnInit() {
    // chart
    this.chartCandleOptions = {
      ...this.chartCandleOptions, ...{
        series: [
          {
            name: "candle",
            data: seriesData
          }
        ]
      }
    };

    // chart bar which is for brush chart data
    this.chartBarOptions = {
      ...this.chartBarOptions, ...{
        series: [
          {
            name: "volume",
            data: seriesDataLinear
          }
        ]
      }
    };
  }

  ngAfterViewInit() {
    // change setTimeout with the subscription  or the method or the event where you want to reRender the chart
    setTimeout(() => {
      this.showChart = true;
      this.chartCandle.updateOptions(this.chartCandleOptions);
      this.chartBar.updateOptions(this.chartBarOptions);
    }, 5000);
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
