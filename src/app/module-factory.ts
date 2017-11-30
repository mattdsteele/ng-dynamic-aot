import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

export const makeEntryComponent = (components: any[]) => {
  @Component({
    template: `<p>Entry Component</p>
      <ng-container *ngFor="let component of components">
        <ng-container *ngComponentOutlet="component"></ng-container>
      </ng-container>
    `
  })
  class EntryComponent {
    components = components;
  }
  return EntryComponent;
};
export const makeModule = (componentName: string, components: any[]): any => {
  const EntryComponent = makeEntryComponent(components);
  const routes: Route[] = [{ path: componentName, component: EntryComponent }];
  const declarations = [EntryComponent, ...components];

  @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations,
    entryComponents: components,
    exports: [EntryComponent]
  })
  class Module {}
  return Module;
};
