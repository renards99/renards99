import { Injectable } from '@angular/core';
import messagesJson from '../../../assets/messages.json';
import { message } from '../model/message.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: message[] = messagesJson;

  user:string ='devguy@angular.dev'
  public getMessages(){
    console.log('getting message')
    console.log(this.user)
    return this.messages.filter((a:message)=>a.to===this.user);

  }
  public getUser(){
    return this.messages.map((a:message)=>a.to).filter((v, i, a) => a.indexOf(v) === i)
  }
  public onChangeUser(user:string){
    this.user=user
    this.getMessages()
  }
}
