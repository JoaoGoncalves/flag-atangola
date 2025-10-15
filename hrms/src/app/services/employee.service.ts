import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../infrastructure/types/employee';

@Injectable(/* {
  providedIn: 'root'
} */)
export class EmployeeService {

  private readonly api = 'https://my-json-server.typicode.com/JoaoGoncalves/hrms-api';
  
  constructor(private readonly http: HttpClient){}

  getEmployees(){
    return this.http.get<Employee[]>(`${this.api}/employees`);
  }

  getemployee(id:number){
    return this.http.get<Employee>(`${this.api}/employees/${id}`)
  }
}
