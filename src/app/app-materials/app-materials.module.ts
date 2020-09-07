import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
const appmaterials=[MatButtonModule,MatButtonToggleModule,
  MatIconModule,MatBadgeModule,MatProgressSpinnerModule,MatInputModule,MatFormFieldModule]
  


@NgModule({
  declarations: [],
  imports: [
    appmaterials
  ],
  exports:[appmaterials]
})
export class AppMaterialsModule { }
