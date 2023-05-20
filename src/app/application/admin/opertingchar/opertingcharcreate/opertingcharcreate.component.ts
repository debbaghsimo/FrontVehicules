import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Opertingchar } from 'src/app/_core/model/opertingchar';
import { OpertingcharService } from 'src/app/_core/service/opertingchar.service';

@Component({
  selector: 'app-opertingcharcreate',
  templateUrl: './opertingcharcreate.component.html',
  styleUrls: ['./opertingcharcreate.component.css']
})
export class OpertingcharcreateComponent implements OnInit{
  opertingchar:Opertingchar|any =null;
  id:number|any =null;
  constructor(private fb:FormBuilder,private operetingservice: OpertingcharService,private router:Router,private activeRouter: ActivatedRoute) { }

  registerform!:FormGroup
  ngOnInit() :void{
    this.id= this.activeRouter.snapshot.paramMap.get('id');
    this.createform();
    if(this.id!=null){
       this.getOpertingchar();
    }
  }

  createform(){
    this.registerform = this.fb.group({
      id: [''],
      cruisingRange: [''],
      fuelTankCapacity: [''],
      fuel: [''],
      acceleration: [''],
      maxSpeed: [''],
      cityDrivingFuel: [''],
      highwayDrivingFuel: [''],
      mixedDrivingFuel: [''],
      payload: ['']
    })
  }

  getOpertingchar() {
    this.operetingservice.show(this.id).subscribe(res=>{
      this.opertingchar = res;
      this.registerform.setValue({
        id:this.opertingchar.id,
        cruisingRange:this.opertingchar.cruisingRange,
        fuelTankCapacity:this.opertingchar.fuelTankCapacity,
        fuel:this.opertingchar.fuel,
        acceleration:this.opertingchar.acceleration,
        maxSpeed:this.opertingchar.maxSpeed,
        cityDrivingFuel:this.opertingchar.cityDrivingFuel,
        highwayDrivingFuel:this.opertingchar.highwayDrivingFuel,
        mixedDrivingFuel:this.opertingchar.mixedDrivingFuel,
        payload:this.opertingchar.payload
    });
  });
  }

  CRUD(){

    if(this.id==null){
   this.ajouter();
    }else{
      console.log(this.opertingchar);
      this.modifier();
   }
  }

  ajouter() {
    const operetingchar:Opertingchar|any ={
      cruisingRange:this.registerform.value['cruisingRange'],
      fuelTankCapacity:this.registerform.value['fuelTankCapacity'],
      fuel:this.registerform.value['fuel'],
      acceleration:this.registerform.value['acceleration'],
      maxSpeed:this.registerform.value['maxSpeed'],
      cityDrivingFuel:this.registerform.value['cityDrivingFuel'],
      highwayDrivingFuel:this.registerform.value['highwayDrivingFuel'],
      mixedDrivingFuel:this.registerform.value['mixedDrivingFuel'],
      payload:this.registerform.value['payload']
    };
    this.operetingservice.ajouter(operetingchar).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/Gestion/admin/opertingchar']);
    })
  }

  modifier(){
    this.opertingchar={
      id:this.registerform.value['id'],
      cruisingRange:this.registerform.value['cruisingRange'],
      fuelTankCapacity:this.registerform.value['fuelTankCapacity'],
      fuel:this.registerform.value['fuel'],
      acceleration:this.registerform.value['acceleration'],
      maxSpeed:this.registerform.value['maxSpeed'],
      cityDrivingFuel:this.registerform.value['cityDrivingFuel'],
      highwayDrivingFuel:this.registerform.value['highwayDrivingFuel'],
      mixedDrivingFuel:this.registerform.value['mixedDrivingFuel'],
      payload:this.registerform.value['payload']
    };
   this.operetingservice.modifier(this.opertingchar).subscribe(res=>{
    console.log(res);
    this.router.navigate(['/Gestion/admin/opertingchar'])
   });
  }
}
