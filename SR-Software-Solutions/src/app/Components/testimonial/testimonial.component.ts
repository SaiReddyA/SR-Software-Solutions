import { Component, ElementRef, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { isPlatformBrowser } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SRTechService } from '../../Services/srtech.service';
import { NavigationService } from '../../Services/navigation.service';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [...Common_Modules, ...Material_Modules, FooterComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {

    fb = inject(FormBuilder);
testimonials:any[] = []
  reviewForm = this.fb.group({
    image: this.fb.control<File | null>(null, Validators.required),
    name: ['', Validators.required],
    review: ['', [Validators.required, Validators.minLength(10)]]
  });

  imagePreview: string | ArrayBuffer | null = null;
  showForm = false;
constructor(private service:SRTechService,
  public navigation:NavigationService
){
     this.LoadReviews()
  }
  onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
    this.reviewForm.get('image')?.setValue(file); // ✅ safe way
      const reader = new FileReader();
      reader.onload = () => (this.imagePreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      console.log('Review submitted:', this.reviewForm.value);
      alert('Thank you for your review!');
      this.reviewForm.reset();
      this.imagePreview = null;
      this.showForm = false;
    }
  }

  LoadReviews(){
      this.service.LoadReviews().subscribe({
            next:(res)=>{
                this.testimonials = res
            }
          })
  }
 



}
