import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, MatSortable } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { REAL_DATA } from '../data';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  province: string;
  ctpr: number;
  dupr: number;
  pickles: number;
  delta: number;
}

const GENDER: string[] = ['MALE', 'FEMALE'];

const PROVINCES: string[] = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrl: 'table-overview-example.css',
  templateUrl: 'table-overview-example.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
  ],
})
export class TableOverviewExample implements AfterViewInit {
  displayedColumns: string[] = [
    'index',
    'firstName',
    'lastName',
    'gender',
    'age',
    'province',
    'ctpr',
    'dupr',
    'pickles',
    // 'delta'
  ];
  dataSource: MatTableDataSource<UserData>;

  Math = Math;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    // const users = Array.from({ length: 100 }, (_, k) =>
    //   this.createNewUser(k + 1)
    // );
    const newPlayers = REAL_DATA.map((player: any) => {
      const player_ctpr = this.avg([
        player.ctpr.Overall_Doubles_FutureRating,
        player.ctpr.Overall_Mix_FutureRating,
      ]);
      const player_dupr = parseFloat(player.dupr.ratings.doubles);
      const player_pickles = this.avg([player_ctpr, player_dupr]);
      return {
        id: '',
        // name: player.dupr.fullName,
        firstName: player.ctpr.FirstName,
        lastName: player.ctpr.LastName,
        gender: player.dupr.gender,
        age: player.dupr.age,
        province: player.dupr.shortAddress,
        ctpr: player_ctpr,
        dupr: player_dupr,
        pickles: player_pickles,
        delta: 0,
      };
    });
    // console.log(newPlayers);
    // const users2 = users.concat(newPlayers);
    // console.log(users);
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(newPlayers);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.sort.sort(({ id: 'pickles', start: 'desc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
    const province =
      PROVINCES[Math.round(Math.random() * (PROVINCES.length - 1))];
    const ctprMixed = this.getRndNumber(4.1345, 5.8645);
    const ctprDoubles = this.getRndNumber(4.0485, 5.9324);
    const ctpr = this.avg([ctprDoubles, ctprMixed]);
    const dupr = this.getRndNumber(3.9765, 6.1237);
    const gender = GENDER[Math.round(Math.random() * (GENDER.length - 1))];
    const age = this.getIntegerRndNumber(7, 77);
    const delta = this.getIntegerRndNumber(-12, 12);
    return {
      id: id.toString(),
      firstName: name,
      lastName: name,
      gender,
      age,
      province,
      // progress: Math.round(Math.random() * 100).toString(),
      // progress: Math.round(Math.random() * 100).toString(),
      ctpr,
      dupr,
      pickles: this.avg([ctpr, dupr]),
      delta,
    };
  }

  getRndNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;
  getIntegerRndNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min) + min);
  sum = (array: number[]): number => array.reduce((a, b) => a + b, 0);
  avg = (array: number[]): number => this.sum(array) / array.length || 0;
}
