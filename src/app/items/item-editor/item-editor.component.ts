import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.scss']
})
export class ItemEditorComponent implements OnInit {


  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  addItem(input) {
    this.dataService.pushItem(input.value);
  }

}
