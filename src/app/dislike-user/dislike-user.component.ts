import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislike-user',
  templateUrl: './dislike-user.component.html',
  styleUrls: ['./dislike-user.component.css']
})
export class DislikeUserComponent implements OnInit {
  @Output() onDislikeEvt = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  dislike(dontLike: boolean) {
    console.log(dontLike);
    this.onDislikeEvt.emit(dontLike);
  }

}
