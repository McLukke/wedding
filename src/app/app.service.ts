import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import AppSchema from "./app.schema";

@Injectable()
export class AppService {
  private ENDPOINT: string = "/api/app.php";

  constructor(private http: HttpClient) {}

  submitToServer(data): Observable<AppSchema> {
    console.log("data: ", data);

    return this.http.post<AppSchema>(`${this.ENDPOINT}`, data);
  }
}
