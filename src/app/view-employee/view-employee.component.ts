import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {

  employeeId: number = 0;
  employee:Employee=new Employee();

  constructor(private route:ActivatedRoute,private employeeService:EmployeeService){}

  ngOnInit():void{
    this.employeeId=this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data=>{
      this.employee=data;
    })
  }
}
