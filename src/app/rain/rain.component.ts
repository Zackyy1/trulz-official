import { Component, OnInit } from "@angular/core";
import * as p5 from "p5";
import { Drop } from "./Drop.js";
@Component({
  selector: "app-rain",
  templateUrl: "./rain.component.html",
  styleUrls: ["./rain.component.less"]
})
export class RainComponent implements OnInit {
  private p5;
  constructor() {
    window.onresize = this.onWindowResize;
  }

  ngOnInit() {
    this.createCanvas();
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

      for (var i = 0; i < 500; i++) {
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
