import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementComponent } from '../../element.component';
import { MarkdownConfig } from './markdown.model';

@Component({
  imports: [CommonModule],
  standalone: true,

  templateUrl: 'markdown.component.html'
})
export class MarkdownComponent extends ElementComponent<MarkdownConfig> {

  protected override validateConfiguration(): boolean {
    return !!this.config.contents;
  }

}