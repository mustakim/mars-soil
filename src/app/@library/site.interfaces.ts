import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexStroke, ApexXAxis, ApexYAxis } from "ng-apexcharts";
import { EnumDialogType, EnumGender } from "./site.enum";

export interface IFormElements {
  Name: string;
  Email: string;
  Gender: EnumGender;
  Description: string;
  Password: string;
  Checkbox: boolean;
  Topic: ITopic;
}

export interface ITopic {
  name: string;
}

export interface IColumn {
  name: string, id: string, tasks: string[]
}

export interface IBoard {
  name: string, columns: IColumn[]
}


export interface IDialogData {
  id: string;
  name: string;
  task: string;
  type?: EnumDialogType;
}

export interface IChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
};
