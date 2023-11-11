import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataResponse } from './data.model';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ss-management-dashboard-preview';
  dataUrl = '';
  data: DataResponse = null;
  authToken = '';

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.authToken = params["token"];
      this.getData(params["screenId"]);
    });
  }

  getData(screenId: string): void {
    if(!this.authToken) return;

    this.http.get<any>(
      environment.apiBaseUrl + '/v1/tenant/preview/' + screenId,
      { 
        responseType: 'json',
        headers: new HttpHeaders ({ 'Authorization': `Bearer ${this.authToken}` })
      }).subscribe(
        {
          next: (data) => 
          {
            this.data = data;
          },
          error: (e) => {
            if(e.status == 401) 
            {
              //this.authService.redirectToLogin(true);
            }
            else
            {
              console.log(e)
            }
          },
          complete: () => console.info('complete')
        }
      )
  }
}
