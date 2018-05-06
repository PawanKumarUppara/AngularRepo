 import {Component} from '@angular/core';
// import { Component } from '@angular/core';
@Component({
    selector: 'app-user',
    // template: '<h2>Pawan App</h2>'

templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})
// properties
export class UserComponent {
firstName: string;
lastName: string;
age: number;
mixedArray: any;
numberArray: number[];
address;

unusablt:  void;
u: undefined;
n: null;
constructor(){
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.numberArray = [1, 2 , 3];
    this.mixedArray = ['a' , 1];
    this.unusablt = undefined;
    this.n = null;
    this.address = {
        street: '50 main street',
        city: 'Boston',
        State: 'MA'
        };

    console.log('hi user');
    this.sayHello();
}


addNumbers(num1: number,num2: number): number {
return num1 + num2;
}

sayHello(){


    console.log('hi' + ' ' + this.firstName);
    console.log(this.age);
    this.hasBirthday();
    console.log(this.age);
    console.log(this.addNumbers(2, 3 ));

}

hasBirthday() {
    this.age += 1;
}

showAge() {
    return this.age;
}
}
