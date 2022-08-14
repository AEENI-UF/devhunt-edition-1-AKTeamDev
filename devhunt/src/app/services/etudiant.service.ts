import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
const endpoint = "http://192.168.43.111:8000/api/devhunt";
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
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

  /** Get user */
  allEtudiants(): Observable<any> {
    return this.http.get(endpoint + '/etudiants/').pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError('List users', []))
    );
  }

  /** ADD ETUDIANT */
  addEtudiant(data: any): Observable<any> {
    return this.http.post(endpoint + '/etudiant/add', JSON.stringify(data), this.httpOptions ).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError('ADD ET', []))
    )
  }

  /** UPDATE ETUDIANT */
  updateEtudiant(id :string, data: any): Observable<any> {
    return this.http.post(endpoint + '/etudiant/'+ id, JSON.stringify(data), this.httpOptions).pipe(
      map(data => {
        return data;
      }),
      catchError(this.handleError('ADD ET', []))
    )
  }

  /** GET BY ID  */
  getEtudiantById(id: string) {
    return this.http.get(endpoint + '/etudiants/'+ id).pipe(
      map((data) => {
        return data
      }),
      catchError(this.handleError("GET BY ID", []))
    )
  }

  /** DELETE BY ID  */
  deleteEtudiant(id: string) {
    return this.http.delete(endpoint + '/etudiants/' + id).pipe(
      map((data) => {
        return data
      }),
      catchError(this.handleError("DELETE", []))
    )
  }
}
