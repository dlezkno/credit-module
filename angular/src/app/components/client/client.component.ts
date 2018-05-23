import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { TAB } from '../../libs/slide';
import { ClientService } from '../../services/client.service';
import * as sweetalert from 'sweetalert';

declare var $:any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: []
})

export class ClientComponent implements OnInit {
  @Output() dataClient = new EventEmitter();

  client = {
    document:null,
    name:"",
    lastName:"",
    birthDate:""
  }

  constructor(private ClientRequest:ClientService){  }

  ngOnInit() {}
  
  validateDoc(){
    
    this.ClientRequest.get(this.client.document).subscribe((client:any) => {
      if(client.recordset != undefined && client.recordset.length > 0){
        swal("Ocourrio un error!", "El numero de documento ingresado ya existe en nuestro sistema", "error");
      }else{
        let data = this.client;
        this.dataClient.emit(data);
        TAB.nextTab('client')
      }
    });
    
  }

  validateData(){
    if(this.client.document != null){
      if(this.client.name !=""){
        if(this.client.lastName != ""){
          if(this.client.birthDate != "" && this.validateAge(this.client.birthDate) == true){
            this.validateDoc();
          }else{
            swal("Ocourrio un error!", "Debes ser mayor de edad", "error");
          }
        }else{
          swal("Ocourrio un error!", "Debes ingresar tu apellido", "error");
        }
      }else{
        swal("Ocourrio un error!", "Debes ingresar tu nombre", "error");
      }
    }else{
      swal("Ocourrio un error!", "Debes ingresar tu numero de documento", "error");
    }
  }

  validateAge($age:string):boolean{
    let d = new Date();
    let month = d.getMonth();
    month = month + 1;
    let year = d.getFullYear() - 18;
    let dateFull = year + '-' + month + '-' + d.getDate();
    if(parseInt(dateFull) < parseInt($age)){
      return false;
    }else{
      return true;
    }
  }
}
