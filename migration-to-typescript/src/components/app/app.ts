import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  controller:AppController;
  view:AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
      const sources =  <HTMLElement>document.querySelector('.sources');
      if(sources){
sources!.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data as never)));
        this.controller.getSources((data) => this.view.drawSources(data));
      }
      
    }
}

export default App;
