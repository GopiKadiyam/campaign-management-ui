import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //#region [ Public ]
  get(url: string): Observable<any> {
    return this.httpClient
      .get<any[]>(url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  getById(url: string, id: number): Observable<any> {
    return this.httpClient
      .get<any>(`${url}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  post(url: string, item: any,options:any): Observable<any> {

    return this.httpClient.post<any>(url, JSON.stringify(item), {...this.httpOptions,withCredentials:options?.withCredentials})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  put(url: string, item: any): Observable<any> {
    return this.httpClient.put<any>(url, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  delete(url: string) {
    return this.httpClient.delete<any>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  //#endregion

  //#region [ Private ]
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      //error client
      errorMessage = error.error.message;
    } else {
      //error server
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }

    return throwError(errorMessage);
  }
  //#endregion


}
