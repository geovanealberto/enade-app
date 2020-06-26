import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ResultadosService } from '../resultados.service';
import { Chart } from "./chart";




@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private resultadoService : ResultadosService) { }


  chart = new Chart;


  ngOnInit(): void {

    this.resultadoService.carregarGrafico().subscribe(data=>{

      this.chart==data;

      this.barChartLabels = this.chart.nome.split(',');

      var arraySalario = JSON.parse('[" + this.chart.nota + "]');
      this.barChartLabels = this.chart.nota.split(',');


      this.barChartData = [
        { data: arraySalario, label: 'Notas' }
      ];
    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Notas' }
  ];

}
