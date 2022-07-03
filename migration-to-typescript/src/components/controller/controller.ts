import AppLoader from './appLoader';

class AppController extends AppLoader {
    // getSources(callback: (() => void) | undefined) {
      
    getSources( callback: CallbackType<DataSourcesInterface> ): void {
        super.getResp<DataSourcesInterface>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    // getNews(e: { target: any; currentTarget: any; }, callback: (() => void) | undefined) {
    getNews(e: Event, callback: CallbackType<DataNewsInterface>): void {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId as string);
                    super.getResp<DataNewsInterface>(
                        {
                            endpoint: 'everything',
                            options: {
                              sources: sourceId as never,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    
    }
}

export default AppController;
