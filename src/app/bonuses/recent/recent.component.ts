import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})

export class RecentComponent implements OnInit {

  displayedColumns: string[] = ['avatar', 'name', 'treceived', 'tenrolled'];
  dataSource = new MatTableDataSource<RecentsElement>(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface RecentsElement {
  name: string;
  treceived: string;
  tenrolled: string;


}

const ELEMENT_DATA: RecentsElement[] = [
  {name: 'Mary Dysoster', tenrolled: '+2', treceived: '0'},
  {name: 'Mary Karie', tenrolled: '+1', treceived: '+3'},
  {name: 'Mary Cherie', tenrolled: '0', treceived: '-5'},
  {name: 'Rulon Oboev', tenrolled: '-1', treceived: '-4'},
  {name: 'Garry Dirty', tenrolled: '+5', treceived: '7'},
  {name: 'Vyacheslav Karpov', tenrolled: '-2', treceived: '9'},
  {name: 'Gluharev Sergey', tenrolled: '3', treceived: '2'},
  {name: 'Mikhail Anzheurov', tenrolled: '7', treceived: '5'},
];
