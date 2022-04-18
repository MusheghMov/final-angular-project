import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {Post} from "../../../../common/interfaces/post";
import {User} from "../../../../common/interfaces/user";
import {FormControl, FormGroup} from "@angular/forms";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public userId: number;
  public postId: number;
  public searchText = '';
  public closeResult = '';
  public user: User = null;
  public posts: Post[] = null;
  public postForm: FormGroup = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(),
    body: new FormControl(),
  })

  constructor(
    private modalService: NgbModal,
    private primeNGConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;

    this.activatedRoute.data.subscribe((res) => {
      this.posts = res['post']
    })
    this.activatedRoute.data.subscribe((res) => {
      this.user = res['user']
    })

    this.activatedRoute.params.subscribe((res) => {
      this.userId = res['id'];
    })

  }

  public open(content, i: number) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Your Changes are successfully saved'});
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.postForm.setValue(this.posts[i]);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
