import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TorteComponent } from './torte/torte.component';
import { PrezziComponent } from './prezzi/prezzi.component';
import { HomeComponent } from './home/home.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { NgModule, Component } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path: 'torte',
        component : TorteComponent
    },
    {
        path: 'prezzi',
        component : PrezziComponent 
    },
    {
        path: 'contatti',
        component: ContattiComponent
    },
    {
        path: 'chiSiamo',
        component: ChiSiamoComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouting {}