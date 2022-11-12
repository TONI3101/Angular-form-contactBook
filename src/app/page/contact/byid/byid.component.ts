import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from 'src/app/model/model';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-byid',
  templateUrl: './byid.component.html',
  styleUrls: ['./byid.component.scss']
})
export class ByidComponent implements OnInit {
  id?: number;
  contact?: ContactModel;
  constructor(private contactService: ServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));

      this.contact = this.contactService.getbyid(this.id);

    })
  }

}
