import {HomePage} from "./home/home";
import {StrengthPage} from "./strength/strength";
import {Component} from "@angular/core";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1: any = HomePage;
  tab2: any = StrengthPage;
}
