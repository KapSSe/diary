import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-comments-editor',
  templateUrl: './comments-editor.component.html',
  styleUrls: ['./comments-editor.component.scss']
})
export class CommentsEditorComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addComment(comment){
    this.dataService.pushComment(comment.value);
  }

}
