import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
const endpoint = "http://192.168.43.111:8000/api/devhunt";

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  /**
   * HTTP OPTIONS
   */
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'X-CSRFToken': 'BU9BD3mwuYdZiuKfu2zOpaICGTt4HOrIkaWGAlQRWRxzViYhVpGw6cgyAtIlTXQ9'
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * FUNCTION HANDLER
   */
  private handleError(operation = 'operation', result: any) {
    return (error: any) => {
      console.log(error);
      return of(result as ['']);
    };
  }

  /** ALL COMPTES */
  allComptes(): Observable<any> {
    return this.http.get(endpoint+ "/comptes").pipe(
      map((data) => {
        return data;
      }),
      catchError(this.handleError("ALL COMPTE", []))
    )
  }

  /** ADD COMPTES */
  addCompte(data: any): Observable<any> {
    return this.http.post(endpoint + '/comptes', JSON.stringify(data), this.httpOptions).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError('ADD ET', []))
    )
  }

  /** UPDATE COMPTE */
  updateCompte(data: any): Observable<any> {
    return this.http.post(endpoint + '/update_comptes', JSON.stringify(data), this.httpOptions).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError('ADD ET', []))
    )
  }

  /** GET BY ID  */
  getCompteById(id: string) {
    return this.http.get(endpoint + '/comptes/' + id).pipe(
      map((data) => {
        return data
      }),
      catchError(this.handleError("GET BY ID", []))
    )
  }

  /** DELETE  */
  deleteCompte(id: string) {
    return this.http.delete(endpoint + '/comptes/' + id).pipe(
      map((data) => {
        return data
      }),
      catchError(this.handleError("DELETE", []))
    )
  }
}
