import { Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [Common_Modules, Material_Modules, FooterComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

   constructor(private elRef: ElementRef) {}
ngAfterViewInit(): void {
    // Remove ngSkipHydration if it exists
    const hostElement = this.elRef.nativeElement;
    if (hostElement.hasAttribute('ngskiphydration')) {
      hostElement.removeAttribute('ngskiphydration');
      console.log('Removed ngSkipHydration attribute');
    }

    // Initialize Owl Carousel or other DOM logic here
  }
}
