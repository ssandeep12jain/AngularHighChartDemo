import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../_services/loader.service';


@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  
   loaderService = this.injector.get(LoaderService);
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    this.loaderService.show();
   // this.showLoader();
    console.log("InterCeptor Call");
    setTimeout(()=>{    //<<<---    using ()=> syntax
     
 }, 3000);

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      
        for(var i=0;i<5000000000;i++)
        {

        }
        this.loaderService.hide();
      }
    },
      (err: any) => {
        this.loaderService.hide();
        //this.onEnd();
      }));

  }

  private onEnd(): void {
    this.hideLoader();
  }

  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }

}