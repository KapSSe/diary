import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersistanceService } from './persistance.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private statusSource = new BehaviorSubject<boolean>(false);
  private changeCommentSource = new BehaviorSubject<number>(0);
  private indexSource = new BehaviorSubject<number>(NaN);
  
  public index = this.indexSource.asObservable();
  public status = this.statusSource.asObservable();
  public changeComment = this.changeCommentSource.asObservable();
  public selectedIndex: number;
  public items = [];
  public comments: any;
  
  constructor(private persister: PersistanceService) { 
    this.fetchItems();
    this.fetchComments();
  }

  pushItem(item) {
    this.items.push(item);
    this.comments.push([])
    this.persister.set('items', this.items);
    this.persister.set('comments', this.comments);
    this.updateItems();
  }

  pushComment(comment) {
    this.comments[this.selectedIndex].push(comment);
    this.persister.set('comments', this.comments);
    this.updateComments();
  }

  fetchItems() {
    if(this.persister.get('items')){
      this.items = this.persister.get('items');
    }
    return this.updateItems();
  }

  fetchComments() {
    if(this.persister.get('comments')){
      this.comments = this.persister.get('comments');
    }else{
      this.createCommentsStorage()
    }
  }

  createCommentsStorage() {
      let arr = new Array();
      for(let i = 0; i < this.items.length; i++) {
        arr[i] = new Array();
      }
      return this.comments = arr;
  }

  updateItems() {
    this.statusSource.next(this.items.length > 0 ? true : false);
  }

  updateComments() {
    this.changeCommentSource.next(this.comments[this.selectedIndex].length);
  }

  setSelectedItem(index) {
    this.selectedIndex = index;
    this.indexSource.next(index);
  }

  deleteItem(index) {
    this.items.splice(index, 1);
    this.comments.splice(index,1);
    this.indexSource.next(NaN);
    this.persister.set('comments', this.comments);
    this.persister.set('items', this.items);
  }

}
