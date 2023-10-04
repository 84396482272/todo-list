import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  implements OnInit, DoCheck{

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]')

  ngOnInit(): void {
      
  }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Voce deseja realmente deletar tudo?");

    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number){

    if(!event.length){//verifica se esta vazio
      const confirm = window.confirm("Task esta vazia, deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      // todos os valores checados ficam em baixo e todos os nao checados ficam em cima
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList)); // armazena no localStorage do navegador
    }
  }
}
