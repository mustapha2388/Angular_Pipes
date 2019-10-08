import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: boolean;
  @Input() appareilDate: Date;


  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    if (this.appareilStatus)
      return "Allumé";
    else
      return "Eteint";
  }

  changeState() {
    this.appareilStatus = !this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus)
      return 'green';
    else
      return 'red';
  }

}
