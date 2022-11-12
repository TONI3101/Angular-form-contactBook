import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/model/model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactDiary2: ContactModel[] = [];
  constructor(private contactService: ServiceService) { }

  ngOnInit(): void {
    this.contactDiary2 = this.contactService.getContactDiary2();

  }
  eliminar(){
    this.contactDiary2.pop()
    console.log('elimino');

  }

};
