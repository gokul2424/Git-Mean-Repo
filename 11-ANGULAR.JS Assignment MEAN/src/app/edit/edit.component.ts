import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <style>
  hr.style13 {
    height: 10px;
    border: 0;
    box-shadow: 0 10px 10px -50px #8c8b8b inset;

  }</style>
  <div class="container">
<h1 class="text-center">Edit Employee</h1>
<hr class="style1">
<form class="form-horizontal">
<div class="card">
<label class="control-label col-sm-2" for="name">Name   </label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="name" placeholder="Name" name="name">
</div><br><br>

<label class="control-label col-sm-2" for="age">Age     </label>
<div class="col-sm-10">
  <input type="text" class="form-control" id="age" placeholder="Age" name="age">
</div><br><br>


<label class="control-label col-sm-2" for="email">Email:</label>
<div class="col-sm-10">
  <input type="email" class="form-control" id="email" placeholder="Email" name="email">
</div><br><br>
<button type="button" class="btn btn-info">UPDATE</button>                <button type="button" class="btn">Cancel</button>
</div>
</form>
</div>
  `,
})
export class EditComponent  {  }