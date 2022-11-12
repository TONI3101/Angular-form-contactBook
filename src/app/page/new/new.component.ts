import { Component, OnInit } from '@angular/core';

import {FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { ContactModel } from 'src/app/model/model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  newContactForm!: FormGroup;
  submitted : boolean = false;
  constructor(private form: FormBuilder, private contactService: ServiceService, private router: Router) { }



  ngOnInit(): void {
    this.newContactForm = this.form.group({
      name: [this.contactService.contact.name, [Validators.required, Validators.minLength(3)]],
      surname: [this.contactService.contact.surname, [Validators.required, Validators.minLength(3)]],
      email: [this.contactService.contact.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      tlf: [this.contactService.contact.tlf, [Validators.required, Validators.pattern("^(\\+34|0034|34)?[6789]\\d{8}$")]]
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.newContactForm.valid) {
      const contact: ContactModel = {
        id: 0,
        name: this.newContactForm.get('name')?.value,
        surname: this.newContactForm.get('surname')?.value,
        email: this.newContactForm.get('email')?.value,
        tlf: this.newContactForm.get('tlf')?.value
      }
      this.contactService.newAddContact(contact)
      this.newContactForm.reset();
      this.submitted = false;

      this.router.navigate(['/contact'])
    }
  }

}
