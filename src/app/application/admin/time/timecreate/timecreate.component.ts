import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from 'src/app/_core/service/time.service';

@Component({
  selector: 'app-timecreate',
  templateUrl: './timecreate.component.html',
  styleUrls: ['./timecreate.component.css']
})
export class TimecreateComponent implements OnInit{
  time:Time|any =null;
  id:number|any =null;
  constructor(private fb:FormBuilder,private timeservice: TimeService,private router:Router,private activeRouter: ActivatedRoute) { }

  registerform!:FormGroup
  ngOnInit() :void{
    this.id= this.activeRouter.snapshot.paramMap.get('id');
    this.createform();
    if(this.id!=null){
       this.getVehicule();
    }
  }

  createform(){
    this.registerform = this.fb.group({
      id: [''],
      yearGeneration: [''],
      monthNum: ['']
    })
  }


  getVehicule() {
    this.timeservice.show(this.id).subscribe(res=>{
      this.time = res;
      this.registerform.setValue({
        id:this.time.id,
        yearGeneration:this.time.yearGeneration,
        monthNum:this.time.monthNum
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


  ajouter() {
    const time:Time|any ={
      yearGeneration:this.registerform.value['yearGeneration'],
      monthNum:this.registerform.value['monthNum'],
    };
    this.timeservice.ajouter(time).subscribe(res=>{
      this.router.navigate(['/Gestion/admin/time']);
    })
  }


  modifier(){
    this.time={
      id:this.registerform.value['id'],
      yearGeneration:this.registerform.value['yearGeneration'],
      monthNum:this.registerform.value['monthNum']
    };
    this.timeservice.modifier(this.time).subscribe(res=>{
      console.log(res);
    this.router.navigate(['/Gestion/admin/time'])
   });
  }
}
