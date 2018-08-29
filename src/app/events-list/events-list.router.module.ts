import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PhotoPageComponent } from './event-page/photo-page/photo-page.component';

const routes: Routes = [
    { path: '', component: EventsListComponent },
    { path: 'view/:id',
      component: EventPageComponent,
      children: [
        { path: 'photos/:photoId', component: PhotoPageComponent }
      ]
    },
    { path: '**', component: EventsListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsListRouterModule {

}
