import { Injectable } from '@angular/core';
import { ContactModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public contactDiary2: ContactModel[];
  contact: ContactModel = {
    id: 0,
    name:"",
    surname:"",
    tlf: "",
    email:""

  }
  constructor() {
    this.contactDiary2 = [
      {id: 1,
      name: "Toni",
      surname: "Yeyo",
      tlf: "654765198",
      email: "toni@yeyo.com"},
      {
      id: 2,
      name: "Armando",
      surname: "Guerra",
      tlf:  "456789123",
      email: "armando@guerra.com",
      }
  ];
  }

  getContactDiary2(): ContactModel[]{
    return this.contactDiary2;
  }

  newAddContact(contact: ContactModel): void{
    contact.id = this.contactDiary2.length > 0 ? this.contactDiary2[this.contactDiary2.length -1].id +1 : 1;
    this.contactDiary2 = [...this.contactDiary2, contact]
  }

  getbyid(id: number): ContactModel {
    const filterdContacts = this.contactDiary2.filter((contact) => contact.id ==id)
    return filterdContacts [0];
  }



}
