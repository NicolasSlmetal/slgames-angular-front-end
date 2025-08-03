import { Component, effect, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'slgames-data-input',
  imports: [],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DataInput,
      multi: true
    }
  ],
  templateUrl: './data-input.html',
  styleUrl: './data-input.css'
})
export class DataInput implements ControlValueAccessor {

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};
  disabled = false;

  writeValue(obj: any): void {
    obj && this.value.set(obj);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.writeValue(newValue);
    this.onChange(newValue);
    this.onTouched();
  }

  name = input.required<string>();
  label = input.required<string>();
  placeholder = input.required<string>();
  type = input.required<string>();
  value = model<any>('');
}
