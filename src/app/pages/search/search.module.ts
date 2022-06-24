import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [SearchComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ComponentsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ]
})
export class SearchModule { }
