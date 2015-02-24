import {Component, TemplateConfig, bootstrap, Foreach} from 'angular2/angular2';
import {bind} from 'angular2/di';

@Component({
  selector: 'hello-app',
  componentServices: [],
  template: new TemplateConfig({
    url: 'templates/ng2-ex2.html',
    directives: []
  })
})
class HelloApp {
  favoriteWord: any;
  favoriteColor: any;
  favoriteShape: any;

  constructor(){
    this.favoriteWord = "";
    this.favoriteColor = "";
    this.favoriteShape = "";
  }
  updateFaveWord($event, newWord){
    var which = $event.which;
    // if (which == 13){
      this.favoriteWord = newWord;
    // }
  }

  updateFaveColor($event, newColor){
    this.favoriteColor = newColor;
  }

  updateFaveShape($event, newShape){
    this.favoriteShape = newShape;
  }

}
export function main() {
  bootstrap(HelloApp);
}
