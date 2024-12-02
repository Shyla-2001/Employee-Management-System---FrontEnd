import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.getAllEmployees();
  }
  private getAllEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    })
  }
  updateEmployee(employeeId:number){
    this.router.navigate(['update-employee',employeeId]);
  }

  deleteEmployee(employeeId:number){
    this.employeeService.deleteEmployee(employeeId).subscribe(data=>
    {
      console.log(data);
      this.getAllEmployees();
    }
    )
  }
  viewEmployee(employeeId:number){
    this.router.navigate(['view-employee',employeeId]);

  }
}
