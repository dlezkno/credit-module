import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TAB } from '../../libs/slide';
import { ClientService } from '../../services/client.service';
import { CreditService } from '../../services/credit.service';
declare var $:any;

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: []
})
export class CreditComponent implements OnInit {
  @Input() client:any;
  @Output() dataCredit = new EventEmitter();
  credit = {
    nameCompany:"",
    nitCompany:null,
    salary:null,
    dateLog:""
  }
  constructor(private ClientRequest:ClientService, private CreditRequest:CreditService) { }

  ngOnInit() {

  }

  return(){
    TAB.previousTab();
  }

  validateData(){
    console.log(this.client);
    if(this.credit.nameCompany != ""){
      if(this.credit.nitCompany != null){
        if(this.credit.salary != null){
          if(this.credit.dateLog != ""){
            this.validateCredit();
          }else{
            swal("Ocourrio un error!", "Debes seleccionar tu fecha de ingreso a la compañia que actualmente laboras", "error");
          }
        }else{
          swal("Ocourrio un error!", "Debes ingresar tu salario", "error");
        }
      }else{
        swal("Ocourrio un error!", "Debes ingresar el NIT de la compañia donde trabajas", "error");
      }
    }else{
      swal("Ocourrio un error!", "Debes ingresar el nombre de la compañia donde trabajas", "error");
    }
  }

  validateCredit(){
    if(this.validateTime()){
      if(this.credit.salary > 800000){
        if(this.credit.salary < 1000000){
          this.senData({status:true,amount:"5'000.000",client:this.client});
        }else{
          if(this.credit.salary < 4000000){
            this.senData({status:true,amount:"2'000.0000",client:this.client});
          }else{
            this.senData({status:true,amount:"5'000.0000",client:this.client});
          }
        }
      }else{
        this.senData({status:false,amount:"0",client:this.client});
      }
    }else{
      this.senData({status:false,amount:"0",client:this.client});
    }
  }

  validateTime(){
    let d = new Date();
    let month = d.getMonth();
    month = month + 1;
    let year = d.getFullYear();
    let dateLog = this.credit.dateLog.split("-");
    if(year > parseInt(dateLog[0])){
      if(year - parseInt(dateLog[0]) > 1){
        return true;
      }else{
        if(month - parseInt(dateLog[1]) > 6){
          return true;
        }else{
          return false;
        }
      }
    }else{
      return false;
    }
  }

  senData($data){
    let dataSend = $data.client;
    dataSend.document = String($data.client.document);
    dataSend.nameCompany = this.credit.nameCompany;
    dataSend.nitCompany = String(this.credit.nitCompany);
    dataSend.salary = String(this.credit.salary);
    dataSend.dateLog = this.credit.dateLog;
    
    this.ClientRequest.add(dataSend).subscribe((client:any) => {
      if($data.status == true){
        let id = Math.floor(Math.random() * (900 - 1)) + 1;
        this.CreditRequest.add({
          idCredit:id,
          docClient:dataSend.document,
          amount:$data.amount.replace("'","").replace(".","")
        }).subscribe((client:any) => {
          this.dataCredit.emit($data);
          TAB.nextTab('credit');            
        });
      }else{
        this.dataCredit.emit($data);
        TAB.nextTab('credit');
      }
    });
  }

}
