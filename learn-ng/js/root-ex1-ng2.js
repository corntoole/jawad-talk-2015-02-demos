import {Component, TemplateConfig, bootstrap, Foreach} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'hello-app',
  componentServices: [],
  template: new TemplateConfig({
    inline: "<div>{{message}}</div>",
    directives: []
  })
})
class HelloApp {

}
export function main() {
  bootstrap(HelloApp);
}
