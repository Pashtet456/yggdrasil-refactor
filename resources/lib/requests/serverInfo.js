export function getServerInfo(host, port, callbackFunction) {
   return axios.get( '/serverInfo', {
        params: {
            host,
            port,
        },
   })
       .then( res => {
           callbackFunction(host, port);
           return res.data;
       });
}
