import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSpeechComponent } from './web-speech.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [WebSpeechComponent],
  imports: [
    CommonModule,HttpClientModule,
    MaterialModule
  ]
})
export class WebSpeechModule { }
