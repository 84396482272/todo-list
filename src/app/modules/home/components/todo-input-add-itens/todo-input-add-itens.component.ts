import { Component , EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit{

  @Output() public emitItemTaskList = new EventEmitter(); // output permite recuperar fora do componente

  public addItemTaskList: string = "";
  constructor() {}

  ngOnInit(): void {

  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();//remove espaco em branco da frente e de tras

    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
