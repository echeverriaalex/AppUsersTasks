import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModule } from '../auth/auth.module';


@NgModule({
    declarations: [
        WelcomePageComponent,
    ],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
        AuthModule,
        SharedModule,
    ]
})
export class WelcomeModule { }
