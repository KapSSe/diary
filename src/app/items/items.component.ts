import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  subscription: Subscription;
  selected;
  items: Array<any>;

  constructor(private dataService: DataService) { }
  

  ngOnInit() {
    this.subscription = this.dataService.status
        .subscribe((update) => {
            this.items = this.dataService.items;
          });
    }

  onDelete(i) {
    this.dataService.deleteItem(i)
  }

  selectItem(i){ 
    this.dataService.setSelectedItem(i);
    this.selected = i;
  }


}
