import { Component } from '@angular/core';
import { NoticiasService } from './noticias.service';
import { Welcome, Article, Source } from './noticia';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias: Article[] = []

  constructor(private noticas : NoticiasService) {}

  ngOnInit() {

    this.realizarBusquedaInicial();
    console.log(this.noticas)

  }
  /*
  listadoNoticias(busqueda: string){

    this.noticas.realizarBusqueda(busqueda)
    .subscribe(resp => {this.noticias = resp.articles;}
    ,error => {console.log(error);})

  }*/

  realizarBusquedaInicial(){

    this.noticas.realizarBusquedaInicial()
    .subscribe(resp => {this.noticias = resp.articles;}
    ,error => {console.log(error);})

  }

}
