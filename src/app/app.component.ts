import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 6';

  displayedColumns = ['name', 'color', 'delete'];
  displayedColumns2 = ['name2', 'color2', 'delete2'];
  dataSource = data;
  dataSource2 = data;

  @ViewChild(MatTable) table1: MatTable<any>;
  @ViewChild(MatTable) table2: MatTable<any>;

  delete(row: any): void {
    const index = this.dataSource.indexOf(row, 0);
    if (index > -1) {
      this.dataSource.splice(index, 1);
      this.dataSource2.splice(index, 1);
    }
    //this.table1.renderRows();
    this.table2.renderRows();
  }
}

const data = [
  {
    name: 'eggs',
    color: 'white',
  },
  {
    name: 'cheese',
    color: 'yellow',
  },
  {
    name: 'broccoli',
    color: 'green',
  },
];

const data2 = [
  {
    name: 'eggs2',
    color: 'white2',
  },
  {
    name: 'cheese2',
    color: 'yellow2',
  },
  {
    name: 'broccoli2',
    color: 'green2',
  },
];
