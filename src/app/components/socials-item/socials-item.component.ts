import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-socials-item',
  templateUrl: './socials-item.component.html',
  styleUrls: ['./socials-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsItemComponent {
  _link: String = '';

  @Input()
  set link(link: String) {
    this._link = link.replace('<p>', '').replace('</p>', '');
  }

  get link(): String {
    return this._link;
  }

  @Input()
  image?: String;

  @Input()
  text?: String;
}
