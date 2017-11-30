import { makeModule } from './module-factory';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-1',
  template: `<p>First Component</p>`
})
export class FirstComponent {}

@Component({
  selector: 'app-component-2',
  template: `<p>Second Component</p>`
})
export class SecondComponent {}

export const FooModule = makeModule('foo', [FirstComponent, SecondComponent]);
