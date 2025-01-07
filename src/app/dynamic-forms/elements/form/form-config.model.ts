import { Translation } from "../../models";
import { ContainerElementConfig } from "../../models/element-config.model";

export interface FormConfig extends ContainerElementConfig {
    title: Translation;
    icon: string;    
}