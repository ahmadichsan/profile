/**
 * This is HttpService, function that wrap axios package
 * With this function, caller of HttpService does not have to provide token
 * since it is already called here by calling the Store
 */

import axios, { AxiosRequestConfig, Method } from 'axios';
import 'dotenv/config';
import { store } from '../app/App.store';

const resTimeout = 'Server is taking too long to respond. This can be caused by poor connectivity or an error in our server. Please try again later';

const getRequestOptions = (method: Method, data: any, headers: Record<string, unknown> | null, reqOptions?: AxiosRequestConfig) => {
  const getReduxState: any = store.getState();

  let parseHeaders = {
    'Content-Type': 'application/json',
    Authorization: '',
  };

  if (getReduxState && getReduxState.auth && getReduxState.auth.token) parseHeaders.Authorization = `Bearer ${getReduxState.auth.token}`;

  if (headers) parseHeaders = { ...parseHeaders, ...headers };

  let requestOptions: AxiosRequestConfig = {
    method,
    headers: { ...parseHeaders },
    data,
    timeout: 60000,
  };

  if (reqOptions) requestOptions = { ...requestOptions, ...reqOptions };

  return requestOptions;
};

const doFetch = async (requestOptions: AxiosRequestConfig, url: string) => {
  const apiHost: string = process.env.REACT_APP_API_HOST || 'localhost';
  const apiPort: number = Number(process.env.REACT_APP_API_PORT) || 3001;
  const apiProtocol: string = process.env.REACT_APP_API_PROTOCOL || 'http';

  let path = `${apiProtocol}://${apiHost}:${apiPort}/${url}`;
  path = apiHost.includes('https://') || apiHost.includes('http://') ? `${apiHost}/${url}` : path;
  path = url.includes('https://') || url.includes('http://') ? url : path;

  return axios(path, requestOptions)
    .then(result => result)
    .catch(err => {
      // here all status < 200 && status >= 300 handled
      // here is info about http status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
      let errorMessage = err.response ? err.response.data : err.message;
      errorMessage = errorMessage || JSON.parse(JSON.stringify(err));

      // custom message if request timeout. In order to make the message more user friendly
      if (err.code === 'ECONNABORTED') errorMessage = resTimeout;

      throw new Error(errorMessage);
    });
};

/**
 * Usage:
 * 
 *    const functionName = async () => {
 *        const headers = {
 *          put your additional config headers here,
 *        };
 * 
 *        const result = await HttpService.get('endPoint', headers);
 *        console.log(result);
 *    };
 */

export const HttpService = {
  get(url: string, headers: Record<string, unknown> | null = null, reqOptions?: AxiosRequestConfig) {
    const requestOptions = getRequestOptions('GET', null, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  post(url: string, data: any, headers: Record<string, unknown> | null = null, reqOptions?: AxiosRequestConfig) {
    const requestOptions = getRequestOptions('POST', data, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  put(url: string, data: any, headers: Record<string, unknown> | null = null, reqOptions?: AxiosRequestConfig) {
    const requestOptions = getRequestOptions('PUT', data, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
  delete(url: string, headers: Record<string, unknown> | null = null, reqOptions?: AxiosRequestConfig) {
    const requestOptions = getRequestOptions('DELETE', null, headers, reqOptions);
    return doFetch(requestOptions, url);
  },
};
