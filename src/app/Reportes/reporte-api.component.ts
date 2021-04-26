import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiRest} from '../API-REST/API.service';
@Component({
  selector : 'app-reporte-api',
  templateUrl: './reporte-api.component.html',
  styleUrls: ['./reporte-api.component.css']
})
export class ReporteApiComponent implements OnInit{
  constructor(private apiRest: ApiRest, private router: Router, private route: ActivatedRoute) {
  }
  id;
  data;
  titulo;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
      if (this.id === '1'){
        this.titulo = 'Consulta 1';
        this.apiRest.getConsulta1().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '2'){
        this.titulo = 'Consulta 2';
        this.apiRest.getConsulta2().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '3'){
        this.titulo = 'Consulta 3';
        this.apiRest.getConsulta3().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '4'){
        this.titulo = 'Consulta 4';
        this.apiRest.getConsulta4().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '5'){
        this.titulo = 'Consulta 5';
        this.apiRest.getConsulta5().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '6'){
        this.titulo = 'Consulta 6';
        this.apiRest.getConsulta6().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '7'){
        this.titulo = 'Consulta 7';
        this.apiRest.getConsulta7().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '8'){
        this.titulo = 'Consulta 8';
        this.apiRest.getConsulta8().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '9'){
        this.titulo = 'Consulta 9';
        this.apiRest.getConsulta9().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '10'){
        this.titulo = 'Consulta 10';
        this.apiRest.getConsulta10().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '11'){
        this.titulo = 'Consulta 11';
        this.apiRest.getConsulta11().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '12'){
        this.titulo = 'Consulta 12';
        this.apiRest.getConsulta12().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '13'){
        this.titulo = 'Consulta 13';
        this.apiRest.getConsulta13().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '14'){
        this.titulo = 'Consulta 14';
        this.apiRest.getConsulta14().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '15'){
        this.titulo = 'Consulta 15';
        this.apiRest.getConsulta15().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '16'){
        this.titulo = 'Consulta 16';
        this.apiRest.getConsulta16().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '17'){
        this.titulo = 'Consulta 17';
        this.apiRest.getConsulta17().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '18'){
        this.titulo = 'Consulta 18';
        this.apiRest.getConsulta18().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '19'){
        this.titulo = 'Consulta 19';
        this.apiRest.getConsulta19().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }else if (this.id === '20'){
        this.titulo = 'Consulta 20';
        this.apiRest.getConsulta20().subscribe((data: {}) => {
          this.data = data;
          console.log(this.data);
        });
      }
    });
  }
}
