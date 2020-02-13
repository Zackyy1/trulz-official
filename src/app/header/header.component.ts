import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log($("header ul li"));
    let glowingButtons = $("header ul li");
    glowingButtons.each( e => {
        let button = glowingButtons[e]
        $(button).hover(e => {
          if (e.type == 'mouseenter') {
            $(button).addClass('rainbow');
          } else {
            $(button).removeClass('rainbow');
          }
        });
    }, 0);
  }
}
