import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employeeId: number = 0;
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }
}
