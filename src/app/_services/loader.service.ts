import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../loader/loader.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  showLoader = new Subject<boolean>();

  constructor() {
  //  alert('inservice');
  }

  show() {
    
    this.showLoader.next( true);
    //alert('inservice11=>'+ this.showLoader);
  }

  hide() {
    
    this.showLoader.next( false);
    //alert('inservice11=>'+ this.showLoader);
    
  }
  
}

