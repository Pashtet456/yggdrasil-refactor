import axios                                     from 'axios';
import { RequestError, RequestError, UserError } from '@root/lib/classes/error';
import { SYSTEM_ERROR }                          from 'resources/lib/constants/error';

const config = {
    baseURL: '',
    timeout: 60 * 1000,
    withCredentials: true,
};
const instance = axios.create( config );

instance.interceptors.request.use(
    function( config ) {
        return config;
    },
    function( e ) {

      // The request was canceled by client with axios cancelToken
        if ( axios.isCancel( e ) ) return;

        // The request was made but no response was received
        const { status, message } = e.request;

        const data = {
            status: SYSTEM_ERROR,
            message,
        };

        return Promise.reject( new RequestError( data ) );
    },
);

instance.interceptors.response.use(
    function( response ) {

      // The request was made and the server responded with a status code in the range of 2xx
        const { error, errorMessage, result } = response.data;
        const data= {
            type: undefined,
            error,
            errorMessage,
        };

        if ( error ) {
            data.type = 'userError';
            throw new UserError( errorMessage );
        }

        data.type = 'success';
        response.data = result;
        return response;
    },
    function( e ) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const { status, statusText } = e.response;
        const data= {
            type: 'systemError',
            status,
            statusText,
        };
        return Promise.reject( new RequestError( status, statusText ) );
    },
);

export default instance;
