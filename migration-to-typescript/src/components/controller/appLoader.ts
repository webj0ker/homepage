import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        // super('https://newsapi.org/v2/', { apiKey: 'de146aff84a44237aa3d8e1f44b04cf0' });
        super('https://nodenews.herokuapp.com/', { apiKey: 'de146aff84a44237aa3d8e1f44b04cf0' });
    }
}

export default AppLoader;
