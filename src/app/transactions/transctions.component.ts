import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-transactions',
  templateUrl: './transctions.component.html',
  styleUrls: ['./transctions.component.css']
})

export class TransctionsComponent implements OnInit {

  displayedColumns: string[] = ['transactime', 'bonuses', 'prtaskinfo', 'description'];
  dataSource = new MatTableDataSource<TransactionData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface TransactionData {
  transactime: string;
  bonuses: string;
  prtaskinfo: string;
  description: string;
}

const ELEMENT_DATA: TransactionData[] = [

  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #7 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #4 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Dec 01\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #3 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '-5', prtaskinfo: 'Project #1 > Task #11' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+2', prtaskinfo: 'Project #15 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 13:39:23', bonuses: '+1', prtaskinfo: 'Project #20 > Task #14' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 13:39:23', bonuses: '+3', prtaskinfo: 'Project #42 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+4', prtaskinfo: 'Project #22 > Task #15' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+3', prtaskinfo: 'Project #23 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jul 07\'18 : 15:39:23', bonuses: '-1', prtaskinfo: 'Project #2 > Task #12' , description: '****** ****** *******'},
  { transactime: 'Jul 07\'18 : 18:39:23', bonuses: '-2', prtaskinfo: 'Project #22 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #23 > Task #13' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #24 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 12:39:23', bonuses: '+5', prtaskinfo: 'Project #25 > Task #22' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #29 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #1 > Task #5' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #1 > Task #1' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #13' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #3 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},
  { transactime: 'Jun 06\'18 : 15:39:23', bonuses: '+5', prtaskinfo: 'Project #2 > Task #10' , description: '****** ****** *******'},

];
