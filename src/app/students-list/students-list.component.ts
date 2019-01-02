import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
import { StudentService } from '../student.service';
import { Student } from '../student';
 
@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
 
  students: Student[];
 
  constructor(private studentService: StudentService) { }
 
  ngOnInit() {
    this.reloadData();
  }
 
  deleteStudents() {
    this.studentService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.studentService.getStudentsList()
    .subscribe(res => {
      console.log(res);
      this.students = res.content;
  })}
}