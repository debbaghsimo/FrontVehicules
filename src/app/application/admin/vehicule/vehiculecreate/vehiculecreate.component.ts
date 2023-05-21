import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicule } from 'src/app/_core/model/vehicule';
import { VehiculeService } from 'src/app/_core/service/vehicule.service';

@Component({
  selector: 'app-vehiculecreate',
  templateUrl: './vehiculecreate.component.html',
  styleUrls: ['./vehiculecreate.component.css']
})
export class VehiculecreateComponent implements OnInit{
  vehicule:Vehicule|any =null;
  id:number|any =null;
  constructor(private fb:FormBuilder,private vehiculeservice: VehiculeService,private router:Router,private activeRouter: ActivatedRoute) { }

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
      modele: [''],
      generation: [''],
      serie: [''],
      gearboxtype: [''],
      nmbofseat: [''],
      height: ['']
    })
  }


  getVehicule() {
    this.vehiculeservice.show(this.id).subscribe(res=>{
      this.vehicule = res;
      this.registerform.setValue({
        id:this.vehicule.id,
        modele:this.vehicule.modele,
        generation:this.vehicule.generation,
        serie:this.vehicule.serie,
        gearboxtype:this.vehicule.gearboxType,
        nmbofseat:this.vehicule.nbrOfSeat,
        height:this.vehicule.height
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
    const vehicule:Vehicule|any ={
      modele:this.registerform.value['modele'],
      generation:this.registerform.value['generation'],
      serie:this.registerform.value['serie'],
      gearboxType:this.registerform.value['gearboxtype'],
      nbrOfSeat:this.registerform.value['nmbofseat'],
      height:this.registerform.value['height']
    };
    this.vehiculeservice.ajouter(vehicule).subscribe(res=>{
      this.router.navigate(['/Gestion/admin/vehicule']);
    })
  }


  modifier(){
    this.vehicule={
      id:this.registerform.value['id'],
      modele:this.registerform.value['modele'],
      generation:this.registerform.value['generation'],
      serie:this.registerform.value['serie'],
      gearboxType:this.registerform.value['gearboxtype'],
      nbrOfSeat:this.registerform.value['nmbofseat'],
      height:this.registerform.value['height']
    };
    this.vehiculeservice.modifier(this.vehicule).subscribe(res=>{
      console.log(res);
    this.router.navigate(['/Gestion/admin/vehicule'])
   });
  }
}
