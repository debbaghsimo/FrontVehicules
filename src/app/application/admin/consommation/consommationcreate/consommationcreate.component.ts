import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consommation } from 'src/app/_core/model/consommation';
import { Engine } from 'src/app/_core/model/engine';
import { Opertingchar } from 'src/app/_core/model/opertingchar';
import { Time } from 'src/app/_core/model/time';
import { Vehicule } from 'src/app/_core/model/vehicule';
import { ConsommationService } from 'src/app/_core/service/consommation.service';
import { EngineService } from 'src/app/_core/service/engine.service';
import { OpertingcharService } from 'src/app/_core/service/opertingchar.service';
import { TimeService } from 'src/app/_core/service/time.service';
import { VehiculeService } from 'src/app/_core/service/vehicule.service';

@Component({
  selector: 'app-consommationcreate',
  templateUrl: './consommationcreate.component.html',
  styleUrls: ['./consommationcreate.component.css']
})
export class ConsommationcreateComponent implements OnInit {


  consommation:Consommation|any =null;
  EnList:Engine[]|any =null;
  TimeList:Time[]|any =null;
  VihList:Vehicule[]|any =null;
  OperList:Opertingchar[]|any =null;
  id:number|any =null;
  registerform!:FormGroup
  
  constructor(private fb:FormBuilder,private consommationService:ConsommationService,private router:Router,private activeRouter: ActivatedRoute,
    private vehiculeService:VehiculeService,private engineService:EngineService,private timesevice:TimeService,private opertingcharService:OpertingcharService ){

  }

  ngOnInit(): void {
    this.id= this.activeRouter.snapshot.paramMap.get('id');
     this.GetAll();
     this.createform();
     if(this.id!=null){
      this.getconsomation();
   }
  }

  createform(){
    this.registerform = this.fb.group({
      id:[''],
      vehicule:[''],
      engine:[''],
      opertingchar:[''],
      time:['']
    });
  }

  GetAll(){
    this.engineService.getAll().subscribe(res=>{
      this.EnList = res;
    });
    this.vehiculeService.getVehicule().subscribe(res=>{
     
      this.VihList = res;
    });
    this.timesevice.getTime().subscribe(res=>{
      this.TimeList = res;
    });
    this.opertingcharService.getOpertingchar().subscribe(res=>{
      this.OperList = res;
    });
  }
  getconsomation()
  {
    this.consommationService.show(this.id).subscribe(res=>{
      this.consommation = res;
      this.registerform.setValue({
        id:this.consommation.id,
        vehicule:this.consommation.vehicule.id,
        engine:this.consommation.engine.id,
        opertingchar:this.consommation.opertingchar.id,
        time:this.consommation.time.id
      }); 
    });
  }
  CRUD(){
    
    if(this.id==null){
   this.ajouter();
    }else{
      this.modifier();
   }
  }

  ajouter(){
    this.consommation={
      vehicule:{id:this.registerform.value['vehicule']},
      engine:{id:this.registerform.value['engine']},
      opertingchar: {id:this.registerform.value['opertingchar']},
      time: {id:this.registerform.value['time']}
   };
   this.consommationService.ajouter(this.consommation).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/Gestion/admin/engine'])
   });
  }

  modifier(){
    this.consommation={
      id:this.id,
      vehicule:{id:this.registerform.value['vehicule']},
      engine:{id:this.registerform.value['engine']},
      opertingchar: {id:this.registerform.value['opertingchar']},
      time: {id:this.registerform.value['time']}
   };
   this.consommationService.modifier(this.consommation).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/Gestion/admin/engine'])
   });
  }
}
