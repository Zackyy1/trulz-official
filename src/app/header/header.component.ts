import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { Router } from '@angular/router';
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
    $('nav-button').click(e=> {
      console.log(e)
    })
  }

  ngOnInit() {
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

    $('.nav-button').on('click', e=>{
      let url = $(e.target).attr('link');
      this.router.navigateByUrl(url);
    })

  }
}
