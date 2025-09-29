import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToggleSidebarService {
  private _sidebarOpen = new BehaviorSubject<boolean>(false); 
  sidebarOpen$ = this._sidebarOpen.asObservable();

  toggleSidebar(): void {
    this._sidebarOpen.next(!this._sidebarOpen.value);
  }

  open(): void { this._sidebarOpen.next(true); }
  close(): void { this._sidebarOpen.next(false); }
}
