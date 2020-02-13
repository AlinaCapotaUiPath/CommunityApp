import {Component} from '@angular/core'
import { Router } from '@angular/router'
@Component({
    template: `
    <div class="form-group" [ngClass]="{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}">
      <label for="eventName">Event Name:</label>
      <em *ngIf="newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)">Required</em>
      <input (ngModel)="name" name="name" required id="name" type="text" class="form-control" placeholder="Name of your event..." />
    </div>
    <div class="form-group" [ngClass]="{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}">
      <label for="eventDate">Event Date:</label>
      <em *ngIf="newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)">Required</em>
      <input (ngModel)="date" name="date" required id="eventDate" type="text" class="form-control" placeholder="format (mm/dd/yyyy)..." />
    </div>
    <div class="form-group" [ngClass]="{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}">
      <label for="eventTime">Event Time:</label>
      <em *ngIf="newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)">Required</em>
      <input (ngModel)="time" name="time" required id="eventTime" type="text" class="form-control" placeholder="start and end time..." />
    </div>
    <div class="form-group" [ngClass]="{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}">
      <label for="eventPrice">Event Price:</label>
      <em *ngIf="newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)">Required</em>
      <input (ngModel)="price" name="price" required id="eventPrice" type="text" type="number" class="form-control" placeholder="event price..." />
    </div>
    
    <div class="form-group">
      <label for="address">Event Location:</label>
      <input (ngModel)="address" name="address" id="address" type="text" class="form-control" placeholder="Address of event..." />
    </div>
    <div class="row">
      <div class="col-md-6">
        <input (ngModel)="city" name="city" id="city" type="text" class="form-control" placeholder="City..." />
      </div>
      <div class="col-md-6" >
        <input (ngModel)="country" name="country" id="country" type="text" class="form-control" placeholder="Country..." />
      </div>
    </div>

    <div class="form-group">
      <label for="onlineUrl">Online Url:</label>
      <input (ngModel)="onlineUrl" name="onlineUrl" id="onlineUrl" type="text" class="form-control" placeholder="Online Url..." />
    </div>
    <div class="form-group" [ngClass]="{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}">
      <label for="imageUrl">Image:</label>
      <em *ngIf="newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required">Required</em>
      <em *ngIf="newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern">Must be a png or jpg url</em>
      <input (ngModel)="imageUrl" name="imageUrl" required pattern=".*\/.*.(png|jpg)" id="imageUrl" type="text" class="form-control" placeholder="url of image..." />
      <img />
    </div>
    
    <button type="submit" class="btn btn-primary">Save</button>
    <button type="button" [disabled]="newEventForm.invalid" class="btn btn-default" (click)="cancel()">Cancel</button>
    `
})
export class CreateEventComponent {
    isDirty:boolean = true;
    constructor(private router:Router) {}
    cancel() {
        this.router.navigate(['/events'])
    }
}