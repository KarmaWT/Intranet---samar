import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { SistemasComponent } from './pages/sistemas/sistemas.component';
import { ContainerComponent } from './components/container/container.component';
import { RadiologiaComponent } from './pages/radiologia/radiologia.component';
import { EnfermagemComponent } from './pages/enfermagem/enfermagem.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComprasComponent } from './pages/compras/compras.component';
import { SystemCardComponent } from './components/system-card/system-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    SistemasComponent,
    ContainerComponent,
    RadiologiaComponent,
    EnfermagemComponent,
    LaboratorioComponent,
    ComprasComponent,
    SystemCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
