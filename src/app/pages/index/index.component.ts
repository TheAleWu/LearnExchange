import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  html: string = `<span style="margin-bottom: 1em">This is a test for the ng-katex module</span>
    <h2>Inline equation</h2>
    <span>The integral $\\int e^x dx$ evaluates to $e^x + C$</span>
    <h2>Block equation</h2>
    <span>Also, the following integral evaluates to $$\\int \\frac{1}{x}\\, dx = \\ln|x| + C$$</span>`

  ngOnInit(): void {
  }
}
