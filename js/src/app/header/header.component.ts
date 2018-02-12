import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string;
  @Input() reportName: string;
  @Input() showRightNavButton: boolean;
  @Output() onToggleRightNav = new EventEmitter();
  @Output() changeTitleInput = new EventEmitter();

  toggleRightNav() {
    this.onToggleRightNav.emit();
  }
}
