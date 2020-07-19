import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private data = [];
  public getChartDataEvent = new Subject<any>();

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
  });
  }

  public getJSON(): Observable<any> {
    return this.http.get("https://reqres.in/api/users?page=2");
}

public getChartData() {

  const self = this;

  self.data = [10, 12, 9, 18, 7];

  setTimeout(() => {
    self.getChartDataEvent.next(self.data);
  }, 2000);
}

}
