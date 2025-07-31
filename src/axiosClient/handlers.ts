import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { MMKV, STORAGE_KEYS } from '@utilities/mmkvStorage';

export const requestHandler = async (request: InternalAxiosRequestConfig) => {

  const userAuthDetails: any = await MMKV.getMapAsync(STORAGE_KEYS.USER_AUTH_DETAILS);

  const token = userAuthDetails?.tokenData?.tokenId;

  if (typeof request.headers === 'undefined') {
    return request;
  }

  if (token) {
    request.headers['Authorization'] = 'Bearer ' + token;
  }

  return request;

}

export const responseHandler = (response: AxiosResponse) => {
  return response;
}

// endpoints list where unauthorized action is not required
const internalApiEndpoints = ['resetPassword'];

function checkInternalApiEndpoints(requestURL: string) {

  let countFlag = 0;

  for (let i = 0; i < internalApiEndpoints.length; i++) {
    const endpoint = internalApiEndpoints[i];

    if (requestURL.includes(endpoint) === true) {
      countFlag = 0;
      break;
    } else {
      countFlag++;
    }
  }

  if (countFlag === 0) {
    return true;
  }

  return false;

}

export const errorHandler = (error: AxiosError) => {

  console.log(error, 'axios error handler');

  if (error.code === "ERR_NETWORK") {
    return console.error("Network Error. Your request can't be processed.");
  }

  const _error: any = error.response;

  if (_error && _error.data.statusCode === 401) {
    MMKV.removeItem(STORAGE_KEYS.USER_AUTH_DETAILS);
  }

  if (_error && _error.data?.statusCode === 500) {
    throw new Error(`Something went wrong. Internal server error: ${_error}`);
  }

  return _error || error;

};