import { Component } from '@angular/core';

interface Student {
  name: string;
  age: number;
}

@Component({
  selector: 'app-parent-student',
  templateUrl: './parent-student.component.html',
  styleUrl: './parent-student.component.css'
})
export class ParentStudentComponent {
  students: Student[] = [];

  addStudent(student: { name: string; age: number }) {
    this.students.push(student);
  }
}