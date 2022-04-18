import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { message } from 'src/app/shared/model/message.model';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  users!:string[]
  constructor(private messageService:MessageService,
    private route:Router) { }

  ngOnInit(): void {
    this.users=this.messageService.getUser()
  }
  selectChangeHandler(event:any){
    this.messageService.onChangeUser(event.target.value)
    this.route.navigate(['/messages']);
    alert('account switched');
  }
}
