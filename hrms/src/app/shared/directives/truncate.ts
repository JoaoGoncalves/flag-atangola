import { AfterViewInit, Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appTruncate]',
})
export class Truncate implements AfterViewInit {
  @Input() limit = 80;
  private readonly elRef = inject(ElementRef);

  ngAfterViewInit(): void {
    this.elRef.nativeElement.textContent = this.elRef.nativeElement.textContent.slice(
      0,
      this.limit
    );
  }
}
