class Loader {
    baseLink: string;
    options: ApiOptionsInterface;
    constructor(baseLink: string, options: ApiOptionsInterface ) {
        this.baseLink = baseLink;
        this.options = options;   
    }

    getResp<T>(
        // { endpoint, options = {} }: {endpoint:string, options: object},
        { endpoint, options = {} }: QueryOptionsInterface,
        callback: CallbackType<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<T>('GET', endpoint, callback, options);
    }

    // errorHandler(res: { ok: any; status: number; statusText: string | undefined; }) {
    errorHandler(res: Response): Response {
      
      
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    // makeUrl(options: {}, endpoint: string) {
    makeUrl(options: OptionsInterface, endpoint: string): string {
        const urlOptions: Record<string, string> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
            // url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: CallbackType<T>, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json() as Promise<T>)
            // .then((res) => res.json<IResponse>())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
