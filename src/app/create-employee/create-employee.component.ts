import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {Router} from '@angular/router'
import { error } from 'console';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
  
employee:Employee=new Employee();
constructor(private employeeService:EmployeeService,private router:Router){}
ngOnInit(): void {
  
}
onSubmit(){
  console.log(this.employee);
  this.saveEmployee();
}

saveEmployee() {
  this.employeeService.createEmployee(this.employee).subscribe(
    data => {
      console.log(data);
      this.goToEmployeeList();
    },
    error => {
      console.error(error);
    }
  );
}
goToEmployeeList(){
  this.router.navigate(['/employees']);
}

}
