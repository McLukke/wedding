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

  selectedTab = 0;

  serverError = "";

  rsvpAlready = Boolean(window.localStorage.getItem("rsvpAlready") === "true");

  isLoading = false;

  googleUrl =
    "https://www.google.com/maps/place/3600+Victoria+Park+Ave,+North+York,+ON+M2H+3B2/@43.8055214,-79.3395755,15z/data=!4m5!3m4!1s0x89d4d3752e2f2273:0x17611bc600aa20ec!8m2!3d43.8064622!4d-79.3374297";

  constructor(private _appService: AppService) {}

  handleSubmit() {
    this.serverError = "";
    this.isLoading = true;

    this._appService.submitToServer(this.formInputs).subscribe(
      res => {
        this.formInputs = { ...initFormState };
        window.localStorage.setItem("rsvpAlready", "true");
        this.rsvpAlready = true;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;

        if (err.status.toString().includes("409")) {
          this.serverError =
            "It seems you have replied already. If you'd like to make changes, please email us.";
        } else {
          this.serverError =
            "Sorry, something unexpected has occurred on our servers.";
        }
      }
    );
  }
}
