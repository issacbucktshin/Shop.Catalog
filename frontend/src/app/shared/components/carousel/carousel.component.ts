import { MediaMatcher} from '@angular/cdk/layout';
import { ChangeDetectorRef, Component,OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  images: Array<string>  = [];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  ngOnInit() {
    this._http.get('https://picsum.photos/list')
        .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
        .subscribe(images => this.images = images);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private _http: HttpClient ) {
      this.mobileQuery = media.matchMedia('(max-width: 450px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  private _randomImageUrls(images: Array<{id: number}>): Array<string> {
    
    return [1, 2, 3].map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return 'https://picsum.photos/g/960/300?image='+randomId;
    });
  }

}
