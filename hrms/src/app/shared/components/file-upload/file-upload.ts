import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  imports: [NgFor, NgIf],
  templateUrl: './file-upload.html',
  styleUrl: './file-upload.css',
})
export class FileUpload {
  @Input({ required: true }) label!: string;
  @Input({transform: (value: string) => value.split(',')}) accept: string[] = [];
  @Output() selected = new EventEmitter<FileList>();
  errorMessage = '';


  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.errorMessage = Array.from(files).every((f) => this.accept.includes(f.type))
      ? ''
      : 'Invalid file type';

    if (this.errorMessage === '') {
      this.selected.emit(files);
    }
  }
}
