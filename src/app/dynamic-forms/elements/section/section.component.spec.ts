import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { CaptureElementConfig } from '../../models';
import { TranslatePipe } from '../../pipes';
import { SectionComponent } from './section.component';
import { SectionConfig } from './section-config.model';

const mockConfig = {

  title: {
    en: 'Section'
  },
  icon: 'icon.png',
  children: [{
    type: 'Textbox',
    conditions: {
      type: 'HideIf',
      key: 'test-key',
      operator: 'Equal',
      value: true
    }
  }],
  width: 'Full',
} as SectionConfig;

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SectionComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.config = mockConfig;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section header with title', () => {
    const titleElement: HTMLElement = fixture.debugElement.query(By.css('.section-header')).nativeElement;
    expect(titleElement.textContent).toContain('Section');
  });

  it('should display icon if provided in config', () => {
    const iconElement: HTMLElement = fixture.debugElement.query(By.css('.section-icon')).nativeElement;
    expect(iconElement).toBeTruthy();

    const iconSrc = iconElement.getAttribute('src');
    expect(iconSrc).toBe('icon.png');
  });

});