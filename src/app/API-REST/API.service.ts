import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const endpointLocal = 'http://192.168.0.36:3031/';
const endpointHeroku = 'https://usab-bases-project2.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://proyecto2basesusac.web.app/'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiRest{
  constructor(private httpClient: HttpClient) {
  }
  public getConsulta1(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta1');
  }
  public getConsulta2(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta2');
  }
  public getConsulta3(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta3');
  }
  public getConsulta4(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta4');
  }
  public getConsulta5(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta5');
  }
  public getConsulta6(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta6');
  }
  public getConsulta7(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta7');
  }
  public getConsulta8(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta8');
  }
  public getConsulta9(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta9');
  }
  public getConsulta10(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta10');
  }
  public getConsulta11(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta11');
  }
  public getConsulta12(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta12');
  }
  public getConsulta13(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta13');
  }
  public getConsulta14(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta14');
  }
  public getConsulta15(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta15');
  }
  public getConsulta16(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta16');
  }
  public getConsulta17(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta17');
  }
  public getConsulta18(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta18');
  }
  public getConsulta19(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta19');
  }
  public getConsulta20(): Observable<any>{
    return this.httpClient.get(endpointHeroku + 'consulta20');
  }
}
