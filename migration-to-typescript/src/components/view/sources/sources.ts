import './sources.css';

class Sources {
    // draw(data: { name: any; id: any; }[]) {
    draw(data: SourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        // data.forEach((item: { name: any; id: any; }) => {
        data.forEach((item) => {
          if (sourceItemTemp) {
            const sourceClone  = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            
            // sourceClone.querySelector('.source__item-name').textContent = item.name;
            if(sourceClone) {
              // console.dir(sourceClone);
              
              (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            }
            
            (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
          }
            
        });

        const divSources = document.querySelector<HTMLDivElement>('.sources');
        if(divSources) {
          divSources.append(fragment);
        }
        
    }
}

export default Sources;
