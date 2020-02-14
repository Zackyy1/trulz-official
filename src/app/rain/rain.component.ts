import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";
import { Drop } from "./Drop.js";
import * as $ from 'jquery'

@Component({
  selector: "app-rain",
  templateUrl: "./rain.component.html",
  styleUrls: ["./rain.component.less"]
})
export class RainComponent implements OnInit {
  private p5;
  constructor() {
    
  }

  ngOnInit() {
    this.createCanvas();
    $('window').resize(e => {
      this.onWindowResize
    })
  }

  private onWindowResize = (e) => {
    this.p5.resizeCanvas(this.p5.windowWidth, this.p5.windowHeight);
  }

  private createCanvas = () => {
    console.log("creating canvas");
    this.p5 = new p5(this.drawing);
  };

  private drawing = function(p: any) {
    var drops = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight).parent('rain-canvas');

      for (var i = 0; i < 100; i++) {
        drops[i] = new Drop(p);
      }
    };
    p.draw = () => {
      
      p.background(31, 31, 31);
      for (var i = 0; i < drops.length; i++) {
        drops[i].fall();
        drops[i].show();
      }
    };

    
  };
}
