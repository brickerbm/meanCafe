import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private rootSource = new BehaviorSubject('');
  currentVal = this.rootSource.asObservable();

  constructor() { }

  changeVal(newVal: string) {
    this.rootSource.next(newVal);
  }
}
