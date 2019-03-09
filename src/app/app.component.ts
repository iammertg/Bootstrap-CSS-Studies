import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild("sideBar") sideBar: ElementRef
  title = 'Flexlayout';

  sideBarIsActive: boolean = true;

  ngOnInit() {

  }

  onClickSideBar() {
    this.sideBarIsActive = false;
  }

  onClickContentHeader() {
    this.sideBarIsActive= true;
  }
}
