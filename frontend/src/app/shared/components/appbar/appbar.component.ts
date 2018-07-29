import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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

export class AppbarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  @Output() isOpen = new EventEmitter<boolean>();

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 450px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onOpenedChange(e: boolean) {
    this.isOpen.emit(e);
  }
}
