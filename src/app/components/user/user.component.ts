 import {Component,OnInit} from '@angular/core';
import { User } from '../models/User';
// import { Component } from '@angular/core';
@Component({
    selector: 'app-user',
    // template: '<h2>Pawan App</h2>'

templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})
// properties
export class UserComponent implements OnInit {

user: User;

constructor() {
    
}

ngOnInit() {


    this.user = {
        firstName: 'John',
        lastName: 'Doe' ,
        age: 30 ,
        address: {
            street: '50 main street',
            city: 'Boston',
            state: 'MA'
        }
    };
    console.log('on init.....');
  }


}

