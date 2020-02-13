import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';
@Component({
    template: `<div>
    <h1>Meetup List</h1>
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="height:25%;">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active" style="text-align:center; height:350px;">
        <img src={{events[0].imageUrl}} alt="Event 1" class="carousel-image">
        <div class="carousel-caption">
          <h3>{{events[0].name}}</h3>
          <p>{{events[0].date | date:'short'}}</p>
        </div>
        <button class="btn btn-primary enroll-button" (click) = "enroll(events[0])">Enroll</button>
      </div>

      <div class="item" style="text-align:center; height:350px;">
        <img src={{events[1].imageUrl}} alt="Event 2" class="carousel-image"> 
        <div class="carousel-caption">
          <h3>{{events[1].name}}</h3>
          <p>{{events[1].date | date:'short'}}</p>
        </div>
        <button class="btn btn-primary enroll-button" (click) = "enroll(events[1])">Enroll</button>
      </div>
    
      <div class="item" style="text-align:center; height:350px;">
        <img src={{events[2].imageUrl}} alt="Event 3" class="carousel-image">
        <div class="carousel-caption">
          <h3>{{events[2].name}}</h3>
          <p>{{events[2].date | date:'short'}}</p>
        </div>
        <button class="btn btn-primary enroll-button" (click) = "enroll(events[2])">Enroll</button>
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    <hr>
    <div class="row">
      <div *ngFor="let event of events"  class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
</div>`,
styles: [`
.carousel-image {width:80%; max-height:350px; display: block; margin-left: auto; margin-right: auto; width: 30%;}
.enroll-button {position: absolute; top: 80%; margin-left:25%; z-index: 999;}
`]
})

export class EventsListComponent implements OnInit {
   events: IEvent[]

      constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
        
      }

      ngOnInit() {
        this.events = this.route.snapshot.data['events'];
      }

      enroll(event) {
        console.log(event);
      }

      handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
      }
}