import { Component, OnInit } from '@angular/core';
import { Engine } from 'src/app/_core/model/engine';
import { EngineService } from 'src/app/_core/service/engine.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enginelist',
  templateUrl: './enginelist.component.html',
  styleUrls: ['./enginelist.component.css']
})
export class EnginelistComponent implements OnInit {

  dtOptions:DataTables.Settings ={};
  EngineList: Engine[]|any;

  constructor(private engineService:EngineService,private router:Router){}

  ngOnInit(): void {
    this.GetAll();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      deferRender: true,
      destroy:true
    }
    

  }

  GetAll(){
    this.engineService.getAll().subscribe(res=>{
      this.EngineList = res;
    })
  }


  delete(id:number){
    this.engineService.delete(id).subscribe(res=>{
    this.GetAll();
    })
  }
}