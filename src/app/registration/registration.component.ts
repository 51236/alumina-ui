import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidationService } from '../services/config/config.service';
import { routerTransition } from '../services/config/config.service';
import { AgGridModule } from 'ag-grid-angular';

class DynamicGrid{     
      title1:string;  
    title2:string;  
    title3:string; 
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [routerTransition()],
	host: { '[@routerTransition]': ''}
})


export class RegistrationComponent implements OnInit {

  

  containers = [];
 
industry:any =[];
add_industry:FormGroup;

cleardata:FormGroup;

 submitted = false;
 ind_gen_name:string="Test1";
 ind_gen_ddlcategory:string="1";
      ind_gen_vender:string="Test1";
      ind_gen_existing_part_id:string="Test1";
      ind_gen__district:string="2";
      ind_reg_ofc:string="Test1";
      ind_gen_caaqme:string="Test1";
      ind_gen_cemc:string="Test1";
      ind_gen_no_of_cemes:string="Test1";
      ind_gen_prim_cont_pername:string="Test1";
      ind_gen_prim_design:string="Test1";
      ind_gen_prim_phone:string="Test1";
      ind_gen_prim_email:string="Test1";
      ind_gen_security_cont_person_name:string="Test1";
      ind_gen_security_cont_degn:string="Test1";
      ind_gen_security_cont_phone:string="Test1";
      ind_gen_security_cont_email:string="Test1";
      ind_gen_address:string="Test1";

      ind_network_conn_data_trans:string="1";
      ind_network_con_historical_data_activity:string="2";

     ind_network_con_station_name:string="";
     ind_network_con_monitoring_typ:string="";



  constructor(private route:Router,private formBuilder: FormBuilder) {
   
   }


      
  ngOnInit():void {
     
  
 localStorage.setItem('length' ,String(0)); 

this.containers.length=Number(localStorage.getItem('length'));
this.add();



     this.add_industry = this.formBuilder.group({
      
       title1: ['', [Validators.required]],
       title2: ['', [Validators.required]],
       title3: ['', [Validators.required]],


			ind_gen_name: ['', [Validators.required]],
      ind_gen_ddlcategory: ['', [Validators.required]],
      ind_gen_vender: ['', [Validators.required]],
      ind_gen_existing_part_id: ['', [Validators.required]],
      ind_gen__district: ['', [Validators.required]],
      ind_reg_ofc: ['', [Validators.required]],
      ind_gen_caaqme: ['', [Validators.required]],
      ind_gen_cemc: ['', [Validators.required]],
      ind_gen_no_of_cemes: ['', [Validators.required]],
      ind_gen_prim_cont_pername: ['', [Validators.required]],
      ind_gen_prim_design: ['', [Validators.required]],
      ind_gen_prim_phone: ['', [Validators.required]],
      ind_gen_prim_email: ['', [Validators.required]],
      ind_gen_security_cont_person_name: ['', [Validators.required]],
      ind_gen_security_cont_degn: ['', [Validators.required]],
      ind_gen_security_cont_phone: ['', [Validators.required]],
      ind_gen_security_cont_email: ['', [Validators.required]],
      ind_gen_address: ['', [Validators.required]],

      //*********network connection details******//

      ind_network_conn_data_trans: ['', [Validators.required]],
      ind_network_con_historical_data_activity: ['', [Validators.required]],
      ind_network_con_monitoring_typ: ['', [Validators.required]],
      ind_network_con_station_name: ['', [Validators.required]],
      ind_network_con_process_attached: ['', [Validators.required]],
      ind_network_con_vendor: ['', [Validators.required]],
      ind_network_con_analyser_make: ['', [Validators.required]],
      ind_network_con_analyser_model: ['', [Validators.required]],
      ind_network_con_analyser_serial_number: ['', [Validators.required]],
      ind_network_con_device_imei_number: ['', [Validators.required]],
      ind_network_con_mac_id: ['', [Validators.required]],
      ind_network_con_measurement_range_min: ['', [Validators.required]],
       ind_network_con_measurement_range_max: ['', [Validators.required]],
      ind_network_con_parameter: ['', [Validators.required]],
      ind_network_con_unit: ['', [Validators.required]],
      ind_network_con_certification: ['', [Validators.required]],
      ind_network_con_longitude: ['', [Validators.required]],
      ind_network_con_latitude: ['', [Validators.required]],
      ind_network_con_measurement_principle: ['', [Validators.required]],
      ind_network_con_stack_height: ['', [Validators.required]],
      ind_network_con_stack_diameter: ['', [Validators.required]],
      ind_network_con_stack_velocity: ['', [Validators.required]],
      ind_network_con_flue_gas_discharge_rate_m3_hr: ['', [Validators.required]],
     ind_network_con_remark:['', [Validators.required]]
     
     

		});
  }

clear(input: HTMLInputElement){
 
  input.value = ''; // null should work too, but as the type ov the value is string I like to use ''
}

  OnClick()
  {
  
  }
  add() {
   this.containers.length=Number(localStorage.getItem('length'));  
    this.containers.push(this.containers.length);
   
    localStorage.setItem('length' ,String(this.containers.length+1)); 

    
  }

    


  goback(){
  this.route.navigateByUrl("/regdetails");
}
get f() { return this.add_industry.controls; }

Insert()
{
   this.submitted = true;
  if (this.add_industry.invalid) {
    alert('invalid');
            return;
        }
alert('login');
}
}
