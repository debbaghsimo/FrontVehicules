import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consommationlist',
  templateUrl: './consommationlist.component.html',
  styleUrls: ['./consommationlist.component.css']
})
export class ConsommationlistComponent implements OnInit{

  dtOptions:DataTables.Settings ={};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      deferRender: true,
      destroy:true
    }
}

}
