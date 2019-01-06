import { Component } from "@angular/core";
import { AppService } from "./app.service";

const initFormState = {
  name: "",
  hasGuest: false,
  guestName: "",
  hasKids: false,
  childName: "",
  vegetarian: false
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  formInputs = { ...initFormState };

  tabs = ["Venue", "RSVP", "Registry"];

  selectedTab = 1;

  serverError;

  rsvpAlready = Boolean(window.localStorage.getItem("rsvpAlready") === "true");

  constructor(private _appService: AppService) {}

  handleSubmit() {
    this.serverError = undefined;

    this._appService.submitToServer(this.formInputs).subscribe(
      res => {
        this.formInputs = { ...initFormState };
        window.localStorage.setItem("rsvpAlready", "true");
      },
      err => {
        this.serverError =
          "Sorry, something unexpected has occurred on our servers.";
      }
    );
  }
}
