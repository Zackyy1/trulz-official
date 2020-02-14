import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.less']
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.trulz-text').hover(e=>{
      console.log(e)
      if (e.type == 'mouseenter') {
        $(e.target).addClass('trulz-zoom')
        $(e.target).removeClass('trulz-glow')

      } else {
        $(e.target).removeClass('trulz-zoom')
        $(e.target).addClass('trulz-glow')

      }
    })
  }

}
