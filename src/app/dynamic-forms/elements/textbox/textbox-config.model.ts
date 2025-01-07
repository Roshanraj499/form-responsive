import { CustomValidator, ElementWidth, Translation } from "../../models";
import { CaptureElementConfig } from "../../models/element-config.model";

export interface TextboxConfig extends CaptureElementConfig {
    placeholder?: Translation;
    validation: {
        isRequired: boolean;
        isOptional: boolean;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        customValidator?: CustomValidator;
    }
}