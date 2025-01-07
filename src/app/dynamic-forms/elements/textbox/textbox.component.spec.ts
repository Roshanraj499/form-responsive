import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextboxComponent } from './textbox.component';
import { FormsModule } from '@angular/forms';
import { TextboxConfig } from './textbox-config.model';
import { DataModel } from '../../models';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  const mockConfig: TextboxConfig = {
    type: "Textbox",
    dataKey: "testKey",
    label: { en: "Test Label" },
    defaultValue: { en: "Default Value" },
    width: "Full",
    validation: {
      isRequired: true,
      isOptional: false
    },
    conditions: {
      type: "HideIf",
      key: "testKey",
      operator: "Equal",
      value: "testValue"
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    component.config = mockConfig;
    component.dataModel = new DataModel();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.value).toBe('Default Value');
    expect(component.isConfigurationValid).toBeTruthy();
  });

  it('should update value when dataModel changes', () => {
    component.dataModel?.set('testKey', 'new value');
    expect(component.value).toBe('new value');
  });

    it('should emit dataModel changes when value updates', () => {
    let emittedModel: DataModel | undefined;
    component.dataModelChange.subscribe((model: DataModel) => {
      emittedModel = model;
    });

    component.handleModelChange('updated value');
    expect(emittedModel?.get('testKey')).toBe('updated value');
  });

  it('should validate configuration correctly', () => {
    expect(component.isConfigurationValid).toBeTruthy();
  });

  it('should cleanup subscriptions on destroy', () => {
    const unsubscribeSpy = spyOn(component.dataModel!, 'unsubscribe');
    component.ngOnDestroy();
    expect(unsubscribeSpy).toHaveBeenCalled();
  });


  it('should translate labels correctly', () => {
    component.locale = 'es';
    component.config.label = {
      'en': 'Name',
      'es': 'Nombre'
    };
    fixture.detectChanges();
    expect(component.translate(component.config.label)).toBe('Nombre');
  });
});
