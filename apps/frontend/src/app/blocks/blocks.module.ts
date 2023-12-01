import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './root/app.component';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './error404/error404.component';
import { MealModule } from '../meal/meal.module';
 


@NgModule({
    declarations: [
        HeaderComponent, AppComponent,   Error404Component,  
    ],
    
    imports: [
        CommonModule,
        BlocksRoutingModule,
        SharedModule,
        MealModule
    ]
    ,
    exports: [HeaderComponent, AppComponent]
})
export class BlocksModule { }
