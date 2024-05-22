import { Component, Input, OnInit } from '@angular/core';
import { DeadLine } from '../../models/deadLine.model';
import { Products } from '../../models/products.model';
import { Quoter } from '../../models/quoter.model';
import { DeadlineService } from '../../services/deadline.service';
import { CuoterService } from '../../services/cuoter.service';

@Component({
  selector: 'app-deadline-list',
  templateUrl: './deadline-list.component.html',
  styleUrl: './deadline-list.component.css'
})
export class DeadlineListComponent implements OnInit{

  deadlines?: DeadLine[];
  currentDeadlines: DeadLine = {};
  currentIndex = -1;
  name = '';

  currentQuoter: Quoter = {};

  
  @Input() currentProducts: Products = {
    SKU: '',
    name: '',
    description: '',
    price: 0
  };
  

  constructor(
    private deadlineService: DeadlineService,
    private cuoterService: CuoterService) { }
  
  ngOnInit(): void {
    this.retrieveDeadLines();
  }

  retrieveDeadLines(): void {
    this.deadlineService.getAllDeadlines()
      .subscribe({
        next: (data) => {
          this.deadlines = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  setActiveDeadLines(deadLine: DeadLine, index: number): void {
    this.currentDeadlines = deadLine;
    this.currentProducts = this.currentProducts;
    this.currentIndex = index;
  }

  getQuoter(): void {

    const data = {
      SKU: this.currentProducts.SKU,
      name: this.currentProducts.name,
      description: this.currentProducts.description,
      price: this.currentProducts.price,
      deadLineId: this.currentDeadlines.id,
      deadline: this.currentDeadlines.deadline,
      normalInterest: this.currentDeadlines.normalInterest,
      punctualInterest: this.currentDeadlines.punctualInterest
    };

    console.log(data);
    this.cuoterService.calculateQuoter(data)
      .subscribe({
        next: (res) => {
          this.currentQuoter = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
}
