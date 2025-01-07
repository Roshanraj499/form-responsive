import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionConfig } from './section-config.model';
import { ElementComponent } from '../../element.component';
import { ContainerComponent } from '../../container.component';
import { TranslatePipe } from '../../pipes';

@Component({
  imports: [CommonModule, ContainerComponent, TranslatePipe],
  standalone: true,

  templateUrl: 'section.component.html',
  styleUrls: ['section.component.scss']
})
export class SectionComponent extends ElementComponent<SectionConfig> {

  protected override validateConfiguration(): boolean {
    return !!this.config.children;
  }
}





