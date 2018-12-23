import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "wedding";
  formInputs = {};

  constructor(private _appService: AppService) {}

  handleSubmit(inputs) {
    console.log("inputs: ", inputs);

    // this._appService.submitToServer(inputs).subscribe(data => {
    //   console.log("data: ", data);

    //   this.formInputs = data;
    // });
  }
}
