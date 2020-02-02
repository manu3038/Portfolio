import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadResume(url,name){
    FileSaver.saveAs(url,name);
  }
}
