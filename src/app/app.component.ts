import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'jbit-app';
  constructor(config: NgbCarouselConfig) {
     config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
   }
   ngOnInit() {
     // this.loadScript('/assets/lib/modernizr.custom.js');
      this.loadScript('/assets/lib/blockmin.js');
      this.onOpenBookMenu();
     // this.loadScript('/assets/lib/jquery.nicescroll.js');

   }

   public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    script.setAttribute('data-complete', 'completeCallback');

script.setAttribute('data-cancel', 'cancelCallback');

script.setAttribute('data-error', 'errorCallback');
    body.appendChild(script);
  }

  onOpenBookMenu(){
    var $niceScrolldiv = $(".book-content");
      
          $(".book-content").niceScroll({
          scrollspeed: 150,
          mousescrollstep: 38,
          cursorwidth: 7,
          cursorborder: 0,
          cursorcolor: '#1e2327',
          autohidemode: true,
          zindex: 999999999,
          horizrailenabled: false,
          cursorborderradius: 0 
        });
  }
  init() {
    //this.loadScript('/assets/lib/modernizr.custom.js');
      this.loadScript('/assets/lib/blockmin.js');
      this.onOpenBookMenu();
  }
  
}
