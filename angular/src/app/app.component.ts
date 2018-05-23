import { Component} from '@angular/core';
import { TAB } from './libs/slide';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente:any;
  allData:any;
  constructor(){

  }

  getDataClient($data){
    this.cliente = $data;
  }

  getAllData($data){
    this.allData = $data;
  }

  ngOnInit(){
    /*
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
    */
  }
  


  

}
