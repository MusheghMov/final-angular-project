import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {Todo} from "../../../../common/interfaces/todo";
import {User} from "../../../../common/interfaces/user";
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public user: User;
  public searchText = '';
  public closeResult = '';
  public todos: Todo[] = [];
  public todoForm: FormGroup = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(),
    completed: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private primeNGConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.primeNGConfig.ripple = true;

    this.activatedRoute.data.subscribe((res) => {
      this.todos = res['todos'];
      this.user = res['user'];
    });
  }

  public open(content, i: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Your Changes are successfully saved'});
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.todoForm.setValue(this.todos[i]);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log(reason)
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
