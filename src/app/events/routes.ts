import { Routes } from '@angular/router';
import { EventsListComponent } from './events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event.component';
import { Error404Component } from '../errors/404.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventListResolver } from './events-list-resolver.service';

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate:  [EventRouteActivator]},
    { path:'404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule)}
]