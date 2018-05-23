import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-request-credit',
  templateUrl: './request-credit.component.html',
  styleUrls: []
})
export class RequestCreditComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit() {

  }

  

}
