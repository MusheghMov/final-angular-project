import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {User} from "../../../../common/interfaces/user";
import {MessageService, PrimeNGConfig} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  public user: User;
  public changed = false;
  public userState = true;
  public addUserState = false;
  public userForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      suite: new FormControl(),
      city: new FormControl(),
      zipcode: new FormControl(),
      geo: new FormGroup({
        lat: new FormControl(),
        lng: new FormControl(),
      })
    }),
    phone: new FormControl(),
    website: new FormControl(),
    company: new FormGroup({
      name: new FormControl(),
      catchPhrase: new FormControl(),
      bs: new FormControl(),
    })
  });

  constructor(
    private primeNGConfig: PrimeNGConfig,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.primeNGConfig.ripple = true;

    this.onSetOrResetUserForm();

    this.onCheckUserFormChanges();

  }

  public onSetOrResetUserForm(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.addUserState = res['addUser']
    });

    if (this.addUserState) {
      this.userForm.reset();
      this.userState = false;
    } else {
      this.activatedRoute.data.subscribe((res) => {
        this.user = res['user'];
        this.userForm.setValue(this.user);
        this.changed = false;
      })
      this.userState = true;
    }
  }

  public onCheckUserFormChanges(): void {
    this.userForm.valueChanges.subscribe(() => {
      this.changed = true;
    });
  }

  public onSaveChanges() {
    console.log(this.changed, this.userForm)
    this.changed = false;
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Your Changes are successfully saved'});
  }

}
