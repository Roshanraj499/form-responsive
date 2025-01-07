import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConfig } from './form-config.model';
import { ElementComponent } from '../../element.component';
import { ContainerComponent } from "../../container.component";

@Component({
  selector: 'naq-form',
  imports: [CommonModule, ContainerComponent],
  standalone: true,

  templateUrl: 'form.component.html'
})
export class FormComponent extends ElementComponent<FormConfig> {
  protected override validateConfiguration(): boolean {
    return !!this.config.children;
  }
}