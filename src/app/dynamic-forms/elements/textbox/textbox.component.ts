import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextboxConfig } from "./textbox-config.model";
import { CaptureElementComponent } from "../../element.component";
import { FormsModule } from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';
import { ENTER_TEXT } from "../../translations.const";
import { FieldAnnotations } from "../../shared/field-annotations/field-annotations.component";

@Component({
  imports: [CommonModule, FormsModule, FieldAnnotations],
  standalone: true,
  templateUrl: "textbox.component.html",
  styleUrl: "textbox.component.scss",
})
export class TextboxComponent extends CaptureElementComponent<TextboxConfig> {

  get ariaLabel() : string {
    return this.translate(ENTER_TEXT) + " " + this.translate(this.config.label);
  }

  get placeholder() : string {
    return this.translate(this.config.placeholder);
  } 
  
  protected override validateConfiguration(): boolean {
    return !!this.config.dataKey && !!this.config.label;
  }     
}
