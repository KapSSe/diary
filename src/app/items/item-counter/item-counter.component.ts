import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.scss']
})
export class ItemCounterComponent implements OnInit {
  @Input() index;
  count: number;
  subscription: Subscription;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.changeComment.subscribe((length)=>{
      this.count = this.dataService.comments[this.index].length;
    })
  }
}
