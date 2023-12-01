import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
 
import { CoreModule } from './core/core.module';
import { BlocksModule } from './blocks/blocks.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './blocks/root/app.component';

@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    BlocksModule,
    CoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
