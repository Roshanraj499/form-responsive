import { Component } from '@angular/core';
import { ContainerComponent } from '../../container.component';
import { WrapperConfig } from './wrapper-config.model';
import { ElementComponent } from '../../element.component';

@Component({
  selector: 'naq-wrapper',
  imports: [ ContainerComponent ],
  standalone: true,
  template: '<naq-container [children]="config.children" [(dataModel)]="dataModel!"></naq-container>'
})
export class WrapperComponent extends ElementComponent<WrapperConfig> {
  protected override validateConfiguration(): boolean {
    return !!this.config.children;
  }
}
