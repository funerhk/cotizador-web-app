import { Component } from '@angular/core';
import { DeadLine } from '../../models/deadLine.model';
import { DeadlineService } from '../../services/deadline.service';

@Component({
  selector: 'app-add-dead-line',
  templateUrl: './add-dead-line.component.html',
  styleUrl: './add-dead-line.component.css'
})
export class AddDeadLineComponent {

  deadlines: DeadLine = {
    id:'',
    deadline: 0,
    normalInterest: 0,
    punctualInterest: 0
  };
  submitted = false;

  constructor(private deadLineService: DeadlineService) { }

  saveDeadline(): void {
    const data = {
      id: this.deadlines.id,
      deadline: this.deadlines.deadline,
      normalInterest: this.deadlines.normalInterest,
      punctualInterest: this.deadlines.punctualInterest
    };

    this.deadLineService.createDeadline(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDeadline(): void {
    this.submitted = false;
    this.deadlines = {
      id:'',
      deadline: 0,
      normalInterest: 0,
      punctualInterest: 0
    };
  }

}
