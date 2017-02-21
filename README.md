# Ng2Prism


# 使用

```html

<z-code language="javascript" [code]="code">

</z-code>

```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  code = `

  import { Component, Type } from '@angular/core';
  @Component({
    selector: 'my-app',
    template:\` my-app\`,
  })
  export class AppComponent {}

 `
}


```
# why use the [code]
https://github.com/angular/angular/issues/12916
