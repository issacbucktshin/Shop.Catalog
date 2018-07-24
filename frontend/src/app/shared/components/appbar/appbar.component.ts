import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: [ './appbar.component.scss']
})

export class AppbarComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 450px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
}
