import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.scss']
})
export class BetslipComponent implements OnInit {

private headerHeight:number = 51;
private betslipHeight:number =0;
private betslip  :HTMLElement ;
  constructor() { 
    
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
       (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
  }

  ngOnInit() {

  }

  receiveMessage: any = (event: any) =>  {
    var heightIframe = window.innerHeight;
    var clientScrollY = event.data[0];
    this.betslip =  document.getElementById('betslip');
    this.betslipHeight = this.betslip.clientHeight
    var clientWindow = event.data[1];
    var top;
    if (heightIframe > clientScrollY + clientWindow - 30) {
      top = clientWindow - this.betslipHeight - this.headerHeight + clientScrollY;
    } else {
      top= heightIframe - this.betslipHeight - this.headerHeight;
    }

    console.log(top);
    this.betslip.style.top =  top.toString()+ "px";
    console.log(this.betslip.style);
    //...
  }
}
