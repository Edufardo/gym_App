import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TrainingComponent } from './components/training/training.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'progress', component: ProgressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
