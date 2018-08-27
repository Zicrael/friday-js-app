import { ModalPhotoModule } from './modal-photo.module';

describe('ModalPhotoModule', () => {
  let modalPhotoModule: ModalPhotoModule;

  beforeEach(() => {
    modalPhotoModule = new ModalPhotoModule();
  });

  it('should create an instance', () => {
    expect(modalPhotoModule).toBeTruthy();
  });
});
