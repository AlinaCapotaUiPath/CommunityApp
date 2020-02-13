import { Component, Input, Output } from '@angular/core'
import { EventEmitter } from '@angular/core';
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class = "well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date | date:'short'}} </div>
        <div>Time: {{event?.time}} </div>
        <div>Price: \${{event?.price}} </div>
        <div *ngIf = "event?.location">
            <span>Location: {{event?.location?.address}} </span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div *ngIf = "event?.onlineURL">Online URL: {{event?.onlineURL}} </div>
    </div>`,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:IEvent
}