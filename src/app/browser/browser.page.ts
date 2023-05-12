import { Component, OnInit } from '@angular/core';
import { Browser} from '@capacitor/browser';
@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {

  constructor() { }

  async openBrowser(){
  await Browser.open({url:'https://www.op.gg/'});

  }

  ngOnInit() {
  }

}

