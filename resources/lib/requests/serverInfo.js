export function getServerInfo(host, port, callbackFunction) {
   return axios.get( '/serverInfo', {
        params: {
            host,
            port,
        },
    })
        .then( res => res.data)
        .finally( () => {
            callbackFunction();
        });
}
