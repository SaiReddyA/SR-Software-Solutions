import { Component } from '@angular/core';
import { Common_Modules, Material_Modules } from '../../app.config';
import { FooterComponent } from '../footer/footer.component';
import { NavigationService } from '../../Services/navigation.service';

@Component({
  selector: 'app-instructer',
  standalone: true,
  imports: [...Common_Modules, ...Material_Modules, FooterComponent],
  templateUrl: './instructer.component.html',
  styleUrl: './instructer.component.css'
})
export class InstructerComponent {
constructor(public navigation:NavigationService){}
}
