import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { message } from 'src/app/shared/model/message.model';
import { MessageService } from 'src/app/shared/service/message.service';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.scss']
})
export class EmailPreviewComponent implements OnInit ,OnChanges{

  emailDetail!: message[]
  filterVar!:string
  constructor(private messageService: MessageService,
    private route:ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params:any)=>{
      console.log(params)
      this.filterVar=params.box;
      console.log(this.filterVar)
      this.emailDetail= this.messageService.getMessages().filter((a)=>
        a.folder ==this.filterVar
    )

  })
  }
}
