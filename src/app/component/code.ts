import {Component, OnInit, Input, ElementRef, NgModule, ViewContainerRef} from '@angular/core';

import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';

import {CommonModule} from "@angular/common";

@Component({
    selector: 'z-code',
    template: `
      <div *ngIf="code">
        <ng-content></ng-content>
      </div>
    `
})
export class Code implements OnInit {

    @Input() language : string;

    @Input() code :string

    constructor(public viewContainer: ViewContainerRef) { }

    ngOnInit() {

      let html = Prism.highlight(this.code, Prism.languages[this.language]);

      let elClass = 'language-' + this.language;

      this.viewContainer.element.nativeElement.innerHTML = `<pre class=${elClass}><code>${html}</code></pre>`;
    }

}

@NgModule({
  imports:[CommonModule],
  declarations:[Code],
  exports:[Code]

})
export class CodeModule{}
