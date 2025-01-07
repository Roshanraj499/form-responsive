export declare type ElementType =
  'Form' |
  'Section' |
  'Wrapper' |
  'Textbox' |
  'Markdown';

export const getElementRegistry = () => new Map<ElementType, () => Promise<any>>([
  ['Form', () => import('./form').then(m => m.FormComponent)],
  ['Section', () => import('./section').then(m => m.SectionComponent)],
  ['Textbox', () => import('./textbox').then(m => m.TextboxComponent)],
  ['Markdown', () => import('./markdown').then(m => m.MarkdownComponent)],
  ['Wrapper', () => import('./wrapper').then(m => m.WrapperComponent)]
]);