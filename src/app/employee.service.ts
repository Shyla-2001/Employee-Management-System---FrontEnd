import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/";

  constructor(private httpClient:HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]> {
     return this.httpClient.get<Employee[]>(`${this.baseUrl}getAllEmployees`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}saveEmployee`,employee);
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}getEmployeeById/${employeeId}`);
  }
}