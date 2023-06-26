import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [SidebarComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SpinnerComponent],
})
export class SharedModule {}
