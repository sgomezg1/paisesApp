import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent,
    TablaComponent,
    BusquedaComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  exports: [
    PorRegionComponent,
    PorPaisComponent,
    PorCapitalComponent,
    VerPaisComponent,
  ],
})
export class PaisesModule {}
