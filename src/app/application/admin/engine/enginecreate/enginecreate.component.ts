import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Engine } from 'src/app/_core/model/engine';
import { EngineService } from 'src/app/_core/service/engine.service';

@Component({
  selector: 'app-enginecreate',
  templateUrl: './enginecreate.component.html',
  styleUrls: ['./enginecreate.component.css']
})
export class EnginecreateComponent implements OnInit {

  engine:Engine|any =null;
  id:number|any =null;
  constructor(private fb:FormBuilder,private engineservice:EngineService,private router:Router,private activeRouter: ActivatedRoute){

  }
  
  registerform!:FormGroup
  ngOnInit(): void {
    this.id= this.activeRouter.snapshot.paramMap.get('id');
    this.createform();
    if(this.id!=null){
       this.getengine();
    }
   
    
  }

  createform(){
    this.registerform = this.fb.group({
      id:[''],
      enginePower:[''],
      capacity:[''],
      engineType:[''],
      maxPower:['']
    });
  }

  getengine(){
    this.engineservice.show(this.id).subscribe(res=>{
          this.engine = res;
          this.registerform.setValue({
            id:this.engine.id,
            enginePower:this.engine.enginePower,
            capacity:this.engine.capacity,
            engineType:this.engine.engineType,
            maxPower:this.engine.maxPower
          }); 
     });
  }

  CRUD(){
    
    if(this.id==null){
   this.ajouter();
    }else{
      console.log(this.engine);
      this.modifier();
   }
  }

  ajouter(){
    this.engine={
      enginePower:this.registerform.value['enginePower'],
      capacity: this.registerform.value['capacity'],
      engineType: this.registerform.value['engineType'],
      maxPower: this.registerform.value['maxPower']
   };
   this.engineservice.ajouter(this.engine).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/Gestion/admin/engine'])
   });
  }

  modifier(){
    this.engine={
      id:this.registerform.value['id'],
      enginePower:this.registerform.value['enginePower'],
      capacity: this.registerform.value['capacity'],
      engineType: this.registerform.value['engineType'],
      maxPower: this.registerform.value['maxPower']
   };
   this.engineservice.modifier(this.engine).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/Gestion/admin/engine'])
   });
  }
}
