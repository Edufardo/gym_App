import { Component, OnInit } from '@angular/core';
import { BilboDto } from '../constants/BilboDto';
import { EstimatedDto } from '../constants/EstimatedDto';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  // Bilbo method
  bilboData: BilboDto;
  estimatedRM: string;


  // Data to graphics
  chartData: EstimatedDto;
  chartDataArray: EstimatedDto[];

  constructor() { 
    this.bilboData = {
      levantamiento : '',
      date: null,
      peso : null,
      reps : null,
    }
    this.chartDataArray = [];
    
  }

  ngOnInit(): void {
  }


  trainingBilbo(data: BilboDto){
    let res = data.peso * data.reps * 0.03
    let RM:number = res + data.peso
    this.estimatedRM = RM.toFixed(2);
    this.chartData = {
      date: data.date,
      RM: parseInt(this.estimatedRM),
      levantamiento: data.levantamiento
    }
    this.chartDataArray.push(this.chartData)
    console.log(this.chartDataArray);
    console.log(data);
    
  }
}
