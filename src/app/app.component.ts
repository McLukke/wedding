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

  handleSubmit() {
    console.log("this.formInputs: ", this.formInputs);

    this._appService.submitToServer(this.formInputs).subscribe(res => {
      console.log("res: ", res);
    });
  }
}
