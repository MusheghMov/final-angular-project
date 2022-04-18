import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../../../common/interfaces/post";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  public post: Post;
  public postForm: FormGroup = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(),
    body: new FormControl(),
  })

  constructor(private activatedRoute: ActivatedRoute)  { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.post = res['post'][this.activatedRoute.snapshot.queryParams['postId']];
      this.postForm.setValue(this.post);
    })


  }

}

