import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "wedding";
  formInputs = {
    yourName: "",
    hasGuest: false,
    guestName: "",
    hasKids: false,
    childName: "",
    vegetarian: false
  };

  constructor(private _appService: AppService) {}

  handleSubmit(event, value) {
    console.log("event: ", event);
    console.log("value: ", value);
    console.log("this.formInputs: ", this.formInputs);

    // this._appService.submitToServer(this.formInputs).subscribe(
    //   res => {
    //     console.log("res: ", res);
    //   },
    //   err => {
    //     console.log("err: ", err);
    //   }
    // );
  }
}
