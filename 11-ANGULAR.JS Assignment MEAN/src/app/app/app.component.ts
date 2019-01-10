import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <style>
  .navbar-default {
    background-color: #66b3ff;
    color: white;
  
}
</style>
  <nav class="navbar navbar-default info-color">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">Workout Tracker App</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"> <a routerLink="/Add">Add Employee</a></li>
      <li> <a routerLink="/Edit">Edit Employee</a></li>
    </ul>
  </div>
</nav>
<router-outlet></router-outlet>


  `,
})
export class AppComponent  {  }
