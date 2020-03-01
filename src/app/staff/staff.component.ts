import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.less']
})
export class StaffComponent implements OnInit {

  mandem: Array<object> = [
    {name: 'Zackyy',
    img: '',
    title: 'staff',
    desc: 'First met Trulz owners before Trulz was born'
  },
  {name: 'Mohz',
    img: '',
    title: 'Founder/CEO',
    desc: 'Founded trulz a long time ago'
  },
  {name: 'Doviss',
    img: '',
    title: 'Dobis',
    desc: 'Vilte\'s friend lol'
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
