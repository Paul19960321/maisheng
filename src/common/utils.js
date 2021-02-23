export function getUrlQuery() {
    if (typeof window !== `undefined`) {
        const queryArr = window.location.search;
        let query = {};
        if (queryArr !== '') {
            queryArr.substr(1).split('&').forEach(item => {
                let obj = item.split('=');
                query[obj[0]] = obj[1]
            });
        }
        return query;
    }
    
}