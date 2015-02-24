import {Component, TemplateConfig, bootstrap, Foreach, Decorator, NgElement} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'hello-app',
  componentServices: [],
  template: new TemplateConfig({
    url: 'templates/ng2-ex3.html',
    directives: [RedDec]
  })
})
class HelloApp {
  value: any;
  constructor(){
    this.value = 1;
  }
  updateValue($event, new_value) {
    this.value = new_value;
  }
  isBold() { return this.value % 2 === 0; };
  isItalic() { return this.value % 3 === 0; };
  isUnderlined()  { return this.value % 5 === 0; };

}

@Decorator({
  selector: '[ng-class]',
  bind: {'NgClass': 'class'},
  observe: {'ngClass': 'ngClassChanged'}
})
export class NgClass {
  constructor(element:NgElement) {
    console.log("Yo!!!");
    this.element = element;
  }

  ngClassChanged(newValue) { 
    let classNames = [];
    if(newValue){
      console.log(newValue);
      this.element.className = newValue;
    }
    else {
        this.element.className = "";
    }

  }
}

@Decorator({selector: '[red]'})
export class RedDec {
  constructor(element:NgElement) {
    this.element = element;
    this.element.style.color = 'red';
  }
}
// @Decorator({
//     selector:'[ng-show]',
//     bind: { 'ngShow': 'ngShow' },
//     observe: {'ngShow': 'ngShowChanged'}
// })
// export class NgShow {  
//     constructor(element:Element) {
//         this.element = element;
//         console.log("NgShow: Directive is loaded!");
//     }

//     ngShowChanged(newValue){
//         if(newValue){
//             this.element.style.display = 'block';
//         }else{
//             this.element.style.display = 'none';
//         }
//     }
// }

export function main() {
  bootstrap(HelloApp);
}

