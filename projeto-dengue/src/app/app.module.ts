import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FormFocoComponent } from './components/foco/form-foco/form-foco.component';
import { GraficoCasosComponent } from './components/graficos/grafico-casos/grafico-casos.component';
import { GraficoFaixaEtariaComponent } from './components/graficos/grafico-faixa-etaria/grafico-faixa-etaria.component';
import { GraficoFocosComponent } from './components/graficos/grafico-focos/grafico-focos.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormPessoaComponent } from './components/pessoa/form-pessoa/form-pessoa.component';
import { TelaInformacaoComponent } from './components/tela-informacao/tela-informacao.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { GoogleMapsComponent } from './models/google-maps/google-maps.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    FormPessoaComponent,
    FormFocoComponent,
    TelaInformacaoComponent,
    GraficoFocosComponent,
    GraficoCasosComponent,
    GraficoFaixaEtariaComponent,
    TelaLoginComponent,
    GoogleMapsComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    GoogleMapsModule,
    HttpClientJsonpModule
  ],
  exports: [
    GoogleMapsComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
