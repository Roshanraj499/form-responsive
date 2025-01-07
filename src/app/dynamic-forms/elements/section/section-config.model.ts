import { Translation } from "../../models";
import { ContainerElementConfig, ElementConfig } from "../../models/element-config.model";

export interface SectionConfig extends ContainerElementConfig {
    title: Translation;
    children: ( ElementConfig )[];
    icon: string;
    width?: string;
}