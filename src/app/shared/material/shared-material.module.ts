import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
// import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {MatSortModule} from '@angular/material/sort';
// import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatChipsModule} from '@angular/material/chips';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatBadgeModule} from '@angular/material/badge';
const materialComponentsArray = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatPaginatorModule,
  MatMenuModule,
  MatGridListModule,
  MatRadioModule,
  // NgxMatSelectSearchModule,
  MatSortModule,
  // SatDatepickerModule,
  // SatNativeDateModule,
  MatDatepickerModule,
  MatTooltipModule,
  DragDropModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  ClipboardModule,
  MatChipsModule,
  ScrollingModule,
  MatBadgeModule
];
// Todo: Waiting for prototype of design, need to remove bootstrap - add extra margins to row, column
@NgModule({
  imports: materialComponentsArray,
  exports: materialComponentsArray
})
export class SharedMaterialModule {}
