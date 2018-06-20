import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments;
  itemSelected: boolean = false;
  subscription: Subscription;

  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    this.subscription = this.dataService.index.subscribe((index) => {
      this.comments = this.dataService.comments[index]
      if(isNaN(index)){
        this.itemSelected = false;
      }else{
        this.itemSelected = true;
      }
    })
  }


}
