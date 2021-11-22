import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BilboDto } from '../constants/BilboDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private http: HttpClient) { }

  getTrainings():Observable<any>{
    return this.http.get('http://localhost:3000/training')
  }

  addTraining(training: BilboDto){
    console.log(training);
    this.http.post(`http://localhost:3000/training/add/${training.id}`, {training})
  }
}
