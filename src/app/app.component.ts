import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fibonacci Generator';
  toDisplay = 'N/A';
  fibsequence = '0';
  lengthToCalculate = 0;

  calculateFib(sequence) {
    // set the first value in the sequence to zero - to prevent duplicate printing since we will
    // only add the latest number to the cumulative string in the recursive method.
    this.fibsequence = '0';

    // convert the number entered as a string by the user into a number datatype
    this.lengthToCalculate = +sequence;

    // if the user has entered 0 or left the field empty we should just display N/A
    if (this.lengthToCalculate === 0) {
      this.toDisplay = 'N/A';
      return;
    }

    // call the fib recursive method to populate our fibsequence string.
    // starting counter at 1 since we have already populated the first number (0).
    this.fibRecursive(1, 0, 1);

    // once we have our cumulative string, display it to the user.
    // our HTML always displays what is in the toDisplay var.
    this.toDisplay = this.fibsequence;

  }

  /**
   * recursive method to generate fibonacci numbers in a sequence.
   * populates a string cumulatively.
   * @param first - the latest number in the sequence
   * @param second - the number prior to the latest number
   * @param counter - how many numbers we have calculated so far
   */
  fibRecursive(first: number, second: number, counter: number) {
    // if we still have numbers left to calculate then plus the first and second number.
    if (counter < this.lengthToCalculate) {
      this.fibsequence += ', ' + first;
      const calculated = first + second;
      this.fibRecursive(calculated, first, counter + 1);
    }
  }
}
