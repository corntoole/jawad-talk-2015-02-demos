import {Component, TemplateConfig, bootstrap, Foreach} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'hello-app',
  componentServices: [],
  template: new TemplateConfig({
    inline: "<div>{{greeting}}</div>",
    directives: []
  })
})
class HelloApp {
  greeting: any;

  constructor(){
    this.greeting = "Hello Jxn Devs from the future!";
  }
}
export function main() {
  bootstrap(HelloApp);
}
