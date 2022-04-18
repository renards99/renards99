import { Component, OnInit } from '@angular/core';
import { message } from 'src/app/shared/model/message.model';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.scss']
})
export class EmailBoxComponent implements OnInit {
  emailBoxes!: string[];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.emailBoxes=this.messageService.getMessages().map((message:message)=>message.folder).filter((v, i, a) => a.indexOf(v) === i)
    this.emailBoxes.sort((a,b) => {
      if (a<b) return -1
      else return 1}
      )
  }

}
