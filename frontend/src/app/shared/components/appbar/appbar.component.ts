import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavItemModel } from '../../../models/models';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: [ './appbar.component.scss'],
  animations: [trigger('expandCollapse', [
        state('true', style({
            'width': '130px'
        })),
        state('false', style({
            'width': '0px'
        })),
        transition('true <=> false', animate(250))
    ])]
})

export class AppbarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @Output() isOpen = new EventEmitter<boolean>();
  navItems: NavItemModel[] = [];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.navItems = [
      {
        path: '/home',
        name: 'דף הבית'
      },
      {
        path: '/home',
        name: 'דף הבית'
      },
      {
        path: '/home',
        name: 'דף הבית'
      },
      {
        path: '/home',
        name: 'דף הבית'
      }
    ];
  }
  onOpenedChange(e: boolean) {
    this.isOpen.emit(e);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
