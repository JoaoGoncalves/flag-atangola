import { Component, computed, effect, signal } from '@angular/core';
import { TimeOffRequest } from '../../../infrastructure/types/time-off-request.type';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-off-requests',
  imports: [DatePipe, NgFor, NgIf, FormsModule],
  templateUrl: './time-off-requests.html',
  styleUrl: './time-off-requests.css',
})
export class TimeOffRequests {
  constructor() {
    /* const a = signal(2);
    const b = signal(3);
    const sum = computed(() => a() + b());
    console.log(sum());
    b.set(7);
    console.log(sum()); */
/* 
    const a = signal(2);
    const b = signal(3);
    const sum = computed(() => {
      console.log('Recalculating');
      return a() + b();
    });

    sum();
    sum();
    sum();
    b.set(10)
    sum();
    sum();
    sum();
 */

    const count = signal(10);
    const increment = () => count.update((v) => v + 1);

    effect( () => {
      console.log(`Count: ${count()}`);
    })

    increment();
    increment();
    increment();
    increment();
    increment();
    

  }

  selectedType = signal<
    'Vacation' | 'Sick Leave' | 'Maternity Leave' | 'Paternity Leave' | 'Other' | ''
  >('');

  requests = signal<TimeOffRequest[]>([
    {
      id: 1,
      employeeId: 1,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      type: 'Vacation',
      status: 'Pending',
    },
    {
      id: 2,
      employeeId: 2,
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      type: 'Sick Leave',
      status: 'Approved',
      comment: 'Feeling pretty sick today :(',
    },
  ]);

  resolvedRequests = computed( 
    //() => this.requests().filter( r => r.status !== 'Pending')
    () => this.filteredRequests().filter( r => r.status !== 'Pending')
  )

  filteredRequests = computed( () => {
    const type = this.selectedType();
    return this.requests().filter( r => (type ? r.type === type : true))
  })

  approveRequest(request: TimeOffRequest) {
    this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) => (i === index ? { ...item, status: 'Approved' } : item));
    });
  }

  rejectRequest(request: TimeOffRequest) {
    this.requests.update((requests) => {
      const index = requests.findIndex((r) => r.id === request.id);
      return requests.map((item, i) => (i === index ? { ...item, status: 'Rejected' } : item));
    });
  }

  deleteRequest(request: TimeOffRequest) {
    this.requests.update((requests) => requests.filter((r) => r.id !== request.id));
  }
}
