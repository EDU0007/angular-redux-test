import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { AppState } from '../store';
import { PersonDelete, PersonNew, PersonUpdate } from '../store/person.actions';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  form: FormGroup;
  Name:string;
  lastName:string;
  Address:string;
  Email:string;
  Password:number;
  dados:[]

  person:Person;
  people$: Observable<Person[]>;

  constructor(public fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      Name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.people$ = this.store.pipe(select('people'));
  }

  addNew() {
    let person: Person = {
      id: new Date().getMilliseconds(),
      name: this.form.value.Name,
      last_name: this.form.value.lastName,
      address: this.form.value.Address,
      email: this.form.value.Email,
      password: this.form.value.Password
    };
    console.log(this.form)
    this.store.dispatch(new PersonNew({person}))
    this.form.reset();
  }

  update(p: Person) {
    this.form = this.fb.group({
      Name: new FormControl(p.name, [Validators.required]),
      lastName: new FormControl(p.last_name, [Validators.required]),
      Address: new FormControl(p.address, [Validators.required]),
      Email: new FormControl(p.email, [Validators.required]),
      Password: new FormControl(p.password, [Validators.required]),
    })
    this.person = p
  }

  confirmUpdate(){
    this.person.last_name= this.form.value.lastName,
    this.person.address= this.form.value.Address,
    this.person.email= this.form.value.Email,
    this.person.password= this.form.value.Password

    this.store.dispatch(new PersonUpdate({person: this.person}))
  }

  delete(p: Person) {
    this.store.dispatch(new PersonDelete({id: p.id}))
  }

 public listar() {
    
    this.dados = this.form.value
    console.log(this.dados)
  }

}
