import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { CardComponent } from './components/shared/card/card.component';
import { GridComponent } from './components/shared/grid/grid.component';

import { HomeComponent } from './components/home/home.component';  


import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component'; 


import { HttpClientModule } from '@angular/common/http';


import { ApiService } from './services/arkham-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { MatButtonModule } from '@angular/material/button'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';   
import { MatTabsModule } from '@angular/material/tabs';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

import { MatExpansionModule } from  '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    CardComponent,
    GridComponent,
    HomeComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  

    MatTableModule,
    MatCardModule,
    
    MatButtonModule,
    MatPaginatorModule, 
    MatTabsModule, 

    MatButtonToggleModule, 
    MatIconModule, 

    FormsModule,         
    MatProgressSpinnerModule,
    
    MatExpansionModule,

    HttpClientModule, BrowserAnimationsModule, 
    

  ],
  providers: [ApiService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
