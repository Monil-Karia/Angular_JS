import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-student',
  templateUrl: './child-student.component.html',
  styleUrl: './child-student.component.css'
})
export class ChildStudentComponent {
  name: string = '';
  age: number | null = null;

  @Output() studentAdded = new EventEmitter<{ name: string; age: number }>();

  onSubmit() {
    if (this.name && this.age !== null) {
      this.studentAdded.emit({ name: this.name, age: this.age });
      this.name = '';
      this.age = null;
    }
  }
}
