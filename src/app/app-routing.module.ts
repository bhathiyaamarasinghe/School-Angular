import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarksTableComponent } from './marks-table/marks-table.component';


const routes: Routes = [

    {path:'',component: MarksTableComponent},
    {path:'marks',component: MarksTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
