import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RadiologiaComponent } from './pages/radiologia/radiologia.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { EnfermagemComponent } from './pages/enfermagem/enfermagem.component';
import { ComprasComponent } from './pages/compras/compras.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'radiologia', component: RadiologiaComponent },
  { path: 'laboratorio', component: LaboratorioComponent },
  { path: 'enfermagem', component: EnfermagemComponent },
  { path: 'compras', component: ComprasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
