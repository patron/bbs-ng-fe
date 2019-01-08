import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.css']
})

export class BonusesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'ethaddr', 'actions'];
  dataSource = new MatTableDataSource<UsersElement>(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  public someForm: FormGroup;

  constructor () {

    this.someForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    });

  }

// TODO : do this request by another way
  public save() {

    fetch('demo/api/demandUpdate')
      .then(dataWrappedByPromise => dataWrappedByPromise.json()).then(data => {
        // you can access your data here
        console.log(data);
      })
      .catch( alert );
  }

}

export interface UsersElement {
  id: string;
  username: string;
  email: string;
  ethaddr: string;

}

const ELEMENT_DATA: UsersElement[] = [
  {id: '1', username: 'user1', email: 'bbsjirauser1@gmail.com', ethaddr: '0x5e042fbab85df501dffb0aad30e159d15bb388bd'},
  {id: '2', username: 'user2', email: 'userrbi2@hotmail.com', ethaddr: '0xE7253fe2834559604dc917Cbe8420301912d0445'},
  {id: '3', username: 'user3', email: 'userer3@yahoo.com', ethaddr: '0x2031A5EA6c6dC2cb69D0A148378118294A5b3904'},
  {id: '4', username: 'Admin', email: 'st.graalex@gmail.com', ethaddr: '0x47f8fb893E7f40AD9E1DDfFD46830949039C050B'},
  {id: '5', username: 'salim', email: 'salim@salimov.com', ethaddr: '0xC756aA55A4b6F69d0C4638523bF9b9bf34BA81a6'},
  {id: '6', username: 'Amic', email: 'amic@gmail.com', ethaddr: '0x3aBF8Ec7aA6B4cC606022d58B6ed2513d4f90615'},
  {id: '7', username: 'pservit', email: 'serj@somemail.com', ethaddr: '0x577a6b470A2a573B42F06Ba3EBD3f51B79e330e5'},
  {id: '8', username: 'Maximus', email: 'max@maximail.com', ethaddr: '0x55538f847cE465bC427CE66e3DE4CaA994461Cfa'},
];
