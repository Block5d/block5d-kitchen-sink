import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-like-user',
  templateUrl: './like-user.component.html',
  styleUrls: ['./like-user.component.css']
})
export class LikeUserComponent implements OnInit {
  @Output() onlikeItEvt = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  like(likeIt: boolean) {
    console.log(likeIt);
    this.onlikeItEvt.emit(likeIt);
  }
}
