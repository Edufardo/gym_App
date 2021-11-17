import { Component, OnInit } from '@angular/core';
import { BilboDto } from '../constants/BilboDto';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  // Bilbo method
  bilboData: BilboDto;
  estimatedRM: string;

  constructor() { 
    this.bilboData = {
      levantamiento : '',
      date: null,
      peso : null,
      reps : null,
    }
  }

  ngOnInit(): void {
  }


  trainingBilbo(data: BilboDto){
    let res = data.peso * data.reps * 0.03
    let RM:number = res + data.peso
    this.estimatedRM = RM.toFixed(2)
    console.log(data);
    
  }
}
