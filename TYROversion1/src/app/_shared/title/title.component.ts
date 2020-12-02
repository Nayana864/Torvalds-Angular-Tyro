import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() displayMessage: string;
  @Input() displayBookMark: boolean;
  constructor() { 
    
  }

  ngOnInit(): void {console.log("displayBookMark : " + this.displayBookMark);
    
  }

}
