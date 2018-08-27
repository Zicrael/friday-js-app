import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPhotoComponent } from './modal-photo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalPhotoComponent],
  exports: [ModalPhotoComponent]
})
export class ModalPhotoModule { }
