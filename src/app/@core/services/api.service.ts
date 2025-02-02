import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface RequestData {
  header?: { [key: string]: string },
  params?: { [key: string]: string },
  body?: any
}

interface RequestOptions extends RequestData {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  endpoint: string
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient: HttpClient = inject(HttpClient);

  private _generateRequestOptions(options: RequestOptions) {
    const { header, body, params } = options;
    return {
      header: this._getHeaders(header),
      body,
      params
    }
  }

  private _getHeaders(headers?: { [key: string]: string }) {
    if (headers) {
      return {
        'Content-Type': "application/json",
        ...headers
      }
    }
    else return {};
  }

  doRequest<T>(options: RequestOptions) {
    const url = options.endpoint;
    const requestOptions = this._generateRequestOptions(options);
    return this.httpClient.request<T>(options.method, url, requestOptions);
  }

  doGet<T>(endpoint: string, params?: { [key: string]: any }) {
    return this.doRequest<T>({
      method: 'GET',
      endpoint,
      params
    });
  }

  doPost<T>(endpoint: string, body:any,params?: { [key: string]: any }){
    return this.httpClient.post<T>(endpoint,body,params);
  }

  doPut<T>(endpoint: string, body:any,params?: { [key: string]: any }){
    return this.httpClient.put<T>(endpoint,body,params);
  }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // }

  // //#region [ Public ]
  // get(url: string): Observable<any> {
  //   return this.httpClient
  //     .get<any[]>(url)
  //     .pipe(
  //       retry(3),
  //       catchError(this.handleError)
  //     )
  // }

  // getById(url: string, id: number): Observable<any> {
  //   return this.httpClient
  //     .get<any>(`${url}/${id}`)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // post(url: string, item: any,options:any): Observable<any> {

  //   return this.httpClient.post<any>(url, JSON.stringify(item), {...this.httpOptions,withCredentials:options?.withCredentials})
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // put(url: string, item: any): Observable<any> {
  //   return this.httpClient.put<any>(url, JSON.stringify(item), this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // delete(url: string) {
  //   return this.httpClient.delete<any>(url, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }
  // //#endregion

  // //#region [ Private ]
  // private handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';

  //   if (error.error instanceof ErrorEvent) {
  //     //error client
  //     errorMessage = error.error.message;
  //   } else {
  //     //error server
  //     errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
  //   }

  //   return throwError(errorMessage);
  // }
  // //#endregion


}
