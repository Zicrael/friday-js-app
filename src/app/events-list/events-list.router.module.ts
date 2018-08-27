import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventPhotosPageComponent } from './event-photos-page/event-photos-page.component';

const routes: Routes = [
    { path: '', component: EventsListComponent },
    { path: 'view/:id', component: EventPageComponent },
    { path: 'photos/:id', component: EventPhotosPageComponent },
    { path: '**', component: EventsListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsListRouterModule {

}
