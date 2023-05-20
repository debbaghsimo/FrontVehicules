import { Component } from '@angular/core';
import { Opertingchar } from 'src/app/_core/model/opertingchar';
import { OpertingcharService } from 'src/app/_core/service/opertingchar.service';

@Component({
  selector: 'app-opertingcharlist',
  templateUrl: './opertingcharlist.component.html',
  styleUrls: ['./opertingcharlist.component.css']
})

export class OpertingcharlistComponent {
  OpertingcharList : Opertingchar[]|any;

  dtOptions:DataTables.Settings ={};

  constructor(private Opertingchar:OpertingcharService){ }

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
this.Opertingchar.getOpertingchar().subscribe(res=>{
this.OpertingcharList = res;
});
}
Delete(id:number){
  this.Opertingchar.deleteOpertingchar(id).subscribe(res=>{
    this.GetAll();
});
}
}
