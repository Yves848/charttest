import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    exports: [
        CardModule,
        ChartModule,
        ButtonModule,
        ToolbarModule,
        DialogModule
    ]
})
export class PrimeComponentsModule { }