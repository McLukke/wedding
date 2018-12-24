import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import AppSchema from "./app.schema";

@Injectable()
export class AppService {
  private ENDPOINT: string = "api/invitation.php";

  constructor(private http: HttpClient) {}

  submitToServer(data): Observable<AppSchema> {
    console.log("data to submit: ", data);

    return this.http
      .post<AppSchema>(`${this.ENDPOINT}`, JSON.stringify(data))
      .pipe(
        map(res => res),
        catchError(this.handleErrors)
      );
  }

  private handleErrors(error: HttpErrorResponse) {
    console.log("error: ", error);

    return throwError("Error!");
  }
}
