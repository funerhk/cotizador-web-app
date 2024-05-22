import { Component, Input, OnInit } from '@angular/core';
import { Quoter } from '../../models/quoter.model';
import { Products } from '../../models/products.model';
import { DeadLine } from '../../models/deadLine.model';
import { CuoterService } from '../../services/cuoter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuoter',
  templateUrl: './cuoter.component.html',
  styleUrl: './cuoter.component.css'
})
export class CuoterComponent implements OnInit{
  currentQuoter: Quoter = {};

  @Input() viewMode = true;

  @Input() currentProducts: Products = {
    SKU: '',
    name: '',
    description: '',
    price: 0
  };

  @Input() currentDeadlines: DeadLine = {
    id:'',
    deadline: 0,
    normalInterest: 0,
    punctualInterest: 0
  };

  message = '';

  constructor(
    private cuoterService: CuoterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getQuoter();
    }
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
