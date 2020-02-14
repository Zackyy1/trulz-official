export function Drop(p) {
    this.x = p.random(p.width);
    this.y = p.random(-500, -50);
    this.z = p.random(-20, 20);
    this.len = p.map(this.z, 0, 20, 10, 20);
    this.yspeed = p.map(this.z, 0, 20, 1, 20);
  
    this.fall = function() {
      this.y = this.y + this.yspeed;
      this.x = this.x + 1;
      var grav = p.map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + grav;
  
      if (this.y > p.height) {
        this.y = p.random(-200, -100);
        this.x = p.random(p.width);
        this.yspeed = p.map(this.z, 0, 20, 4, 10);
      }
     
    };
  
    this.show = function() {
      var thick = p.map(this.z, 0, 20, 1, 3);
      p.strokeWeight(thick);
      p.stroke(0, 202, 4);
      p.line(this.x-100, this.y, this.x-100, this.y + this.len);
      
    };
  }