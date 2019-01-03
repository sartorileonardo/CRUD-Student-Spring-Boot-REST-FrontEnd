import { Component, OnInit } from '@angular/core';
 
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
 
  student: Student = new Student();
  submitted = false;
 
  constructor(private studentService: StudentService, public router: Router) { }
 
  ngOnInit() {
  }
 
  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }
 
  save() {
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['']);
  }
}