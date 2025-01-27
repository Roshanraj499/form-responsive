import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('fields', this.fields.title.children);
  }
  title = 'form-responsive';

  fields = {
    type: 'Form',
    title: {
      en: '',
      es: '',
      fr: '',
      children: [
        {
          type: 'Section',
          width: 'full',
          title: {
            en: 'section',
            es: 'sección',
            fr: 'section',
          },
          children: [
            {
              type: 'Textbox',
              dataKey: 'caseInfo.Vin',
              width: 'quarter',
              label: {
                en: 'textbox',
                es: 'es txt',
                fr: 'fr txt',
              },
              tooltip: {
                en: 'en tool',
                es: 'es tool',
                fr: 'fr tool',
              },
              validation: {
                isRequired: false,
              },
            },
            {
              type: 'Textbox',
              dataKey: 'caseInfo.Vin',
              width: 'quarter',
              label: {
                en: 'half',
                es: 'spanish textbox',
                fr: '',
              },
              validation: {
                isOptional: true,
              },
            },
            {
              type: 'Textbox3',
              dataKey: 'caseInfo.Vin',
              width: 'half',
              label: {
                en: 'textbox2',
                es: 'spanish textbox',
                fr: '',
              },
              validation: {
                isOptional: true,
              },
            },
            // {
            //   type: 'Textbox3',
            //   dataKey: 'caseInfo.Vin',
            //   width: 'quarter',
            //   label: {
            //     en: 'textbox2',
            //     es: 'spanish textbox',
            //     fr: '',
            //   },
            //   validation: {
            //     isOptional: true,
            //   },
            // },
          ],
        },
        {
          type: 'Section',
          width: 'full',
          title: {
            en: 'section',
            es: 'sección',
            fr: 'section',
          },
          children: [
            {
              type: 'Textbox',
              dataKey: 'caseInfo.Vin',
              width: 'quarter',
              label: {
                en: 'textbox',
                es: 'es txt',
                fr: 'fr txt',
              },
              tooltip: {
                en: 'en tool',
                es: 'es tool',
                fr: 'fr tool',
              },
              validation: {
                isRequired: false,
              },
            },
            {
              type: 'Textbox',
              dataKey: 'caseInfo.Vin',
              width: 'quarter',
              label: {
                en: 'half',
                es: 'spanish textbox',
                fr: '',
              },
              validation: {
                isOptional: true,
              },
            },
            {
              type: 'Textbox3',
              dataKey: 'caseInfo.Vin',
              width: 'half',
              label: {
                en: 'textbox2',
                es: 'spanish textbox',
                fr: '',
              },
              validation: {
                isOptional: true,
              },
            },
            // {
            //   type: 'Textbox3',
            //   dataKey: 'caseInfo.Vin',
            //   width: 'quarter',
            //   label: {
            //     en: 'textbox2',
            //     es: 'spanish textbox',
            //     fr: '',
            //   },
            //   validation: {
            //     isOptional: true,
            //   },
            // },
          ],
        },
      ],
    },
  };

  getWidthClassName(width: string, length: number, index: number): string {
    const lastIndex = length - 1;
    if (index === lastIndex) {
      return 'flex-grow';
    }
    switch (width.toLowerCase()) {
      case 'half':
        return 'fw-50';
      case 'quarter':
        return 'fw-25';
      case 'third':
        return 'fw-75';
      default:
        return 'fw-auto'; // Default case for unknown values
    }
  }
}
