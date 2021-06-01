import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreatComponent } from './treat/treat.component';
import { TreatListComponent } from './treat/treat-list/treat-list.component';
import { TreatDetailsComponent } from './treat/treat-details/treat-details.component';
import { MaterialModule } from '@dessert/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@dessert/core-data';
import { CoreStateModule } from '@dessert/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, TreatComponent, TreatListComponent, TreatDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}