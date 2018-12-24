import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import AppSchema from "./app.schema";

@Injectable()
export class AppService {
  private ENDPOINT: string = "api/invitation.php";

  constructor(private http: HttpClient) {}

  submitToServer(data): Observable<AppSchema> {
    const headers = new HttpHeaders();
    headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=utf-8"
    );

    return this.http.post<AppSchema>(`${this.ENDPOINT}`, data, { headers });
  }
}
