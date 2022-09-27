import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.css'],
})
export class CourtComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this.calculateCourtcells();
  }

  rows = [1, 2, 3];
  cols = [1, 2, 3, 4, 5, 6];

  @Input() orientation: string;

  calculateCourtcells() {
    this.rows.splice(0);
    this.cols.splice(0);

    for (let i = 1; i < 4; i++) {
      this.rows.push(i);
      this.cols.push(i);
    }
    if (this.orientation == 'H') {
      for (let i = 4; i < 7; i++) {
        this.cols.push(i);
      }
    } else {
      for (let i = 4; i < 7; i++) {
        this.rows.push(i);
      }
    }
  }

  cellClicked(row, col) {}

  calculateCellStyle(i, j) {
    var style = {
      border: '1px dotted black',
    };

    if (this.orientation == 'H' && j == 3) {
      style['border-right'] = '4px solid black';
    } else if (this.orientation == 'V' && i == 3) {
      style['border-bottom'] = '4px solid black';
    }

    style['width'] = '50px';
    style['height'] = '50px';

    return style;
  }

  CalculateCellClass(i, j) {
    if (this.orientation == 'H' && j == 3) {
      return 'squareRightBorderBold';
    } else if (this.orientation == 'V' && i == 3) {
      return 'squareBottomBorderBold';
    }

    return 'square';
  }
}
