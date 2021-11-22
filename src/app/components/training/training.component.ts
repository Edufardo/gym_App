import { Component, OnInit } from '@angular/core';
import { BilboDto } from '../constants/BilboDto';
import { EstimatedDto } from '../constants/EstimatedDto';
import { v4 as uuidv4 } from 'uuid'
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  providers:[TrainingService]
})
export class TrainingComponent implements OnInit {

  // Bilbo method
  bilboData: BilboDto;
  estimatedRM: string;


  // Data to graphics
  chartData: BilboDto;
  chartDataArray: BilboDto[];

  constructor( private trainingService:TrainingService ) { 
    this.bilboData = {
      id: null,
      levantamiento : '',
      date: null,
      peso : null,
      reps : null,
      RM: null,
    }
    this.chartDataArray = [];
    
  }

  ngOnInit(): void {
    console.log(this.trainingService.getTrainings());
  }


  trainingBilbo(data: BilboDto){
    let res = data.peso * data.reps * 0.03
    let RM:number = res + data.peso
    this.estimatedRM = RM.toFixed(2);
    this.chartData = {
      date: data.date,
      RM: parseFloat(this.estimatedRM),
      levantamiento: data.levantamiento,
      id: uuidv4(),
      peso: data.peso,
      reps: data.reps,
    }
    this.trainingService.addTraining(this.chartData);
    this.chartDataArray.push(this.chartData)
  }
}
