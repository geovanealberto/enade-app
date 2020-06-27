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


  chart:Chart [] = [];


  ngOnInit(): void {

    this.resultadoService.carregarGrafico().subscribe(data=>{


      this.chart=data;

      console.log(data);


      this.barChartLabels = data.map(e => e.nome);

      console.log(this.chart);


       var arrayNota = JSON.parse('[' + this.chart.map(e => e.nota) + ']');


      this.barChartData = [
        { data: arrayNota, label: 'Notas' }
      ];
    });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Notas' }
  ];

}
