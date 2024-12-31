import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component'; 
import { DetailComponent } from './components/detail/detail.component';  
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: '', redirectTo: '/list', pathMatch: 'full' },  
  { path: 'list', component: ListComponent }, 
  { path: 'detail/:id', component: DetailComponent }, 
  
  { path: 'detail/:code', component: DetailComponent }, 

  { path: 'card/:code', component: DetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
