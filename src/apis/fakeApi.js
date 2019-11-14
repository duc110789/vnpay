import maxios from 'axios';
import { baseUrlTest } from '../utils';

// import Auth from '../middlewares/Auth';

/**
 * Fetch api endpoint
 * @param {String} endpoint Endpoint api
 * @param {String} method method in list method http accept
 * @param {Object} params Param to fetch
 * @param {String} accessToken Access token to auth
 * @return {Object} Object response
 */
export function callApi(endpoint, method = 'get', params, headerParams = {}) {
  let fullUrl;

  let options = {};
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${Auth.getToken()}`,
    ...headerParams,
  };

  options = {
    method,
    headers,
    timeout: 60000,
  };
  if (method === 'get' && Object.keys(params).length > 0) {
    fullUrl = baseUrlTest(endpoint, params);
  } else {
    fullUrl = endpoint.indexOf('http') === 0 ? endpoint : baseUrlTest(endpoint);
    if (method !== 'get') {
      options.body = JSON.stringify(params);
    }
  }

  return fetch(fullUrl, options)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (
        !response.ok
        || (response.status && response.status !== 200 && response.status !== 201)
      ) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      response => response,
      (error) => {
        if (error.message === 'Network request failed') {
          throw new Error(999); // No network
        } else if (error.errorCode === 1009) {
          window.location.href = '/#/404';
        } else if (error.errorCode === 1003) {
          window.location.href = '/';
        } else {
          // throw new Error(error.code || 'Something bad happened')
          return Promise.reject(error);
        }
        return false;
      },
    )
    .catch((err) => {
      console.log(err);
    });
}

export async function axiosCallApiFake(endpoint, method = 'get', params, headerParams = {}) {
  let fullUrl = '';
  if (method === 'get' && params && Object.keys(params).length > 0) {
    fullUrl = baseUrlTest(endpoint, params);
  } else {
    fullUrl = baseUrlTest(endpoint, {});
  }

  const axiosSetup = {
    url: fullUrl,
    method,
    timeout: 60000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${Auth.getToken()}`,
      ...headerParams,
    },
  };
  if (method === 'get') {
    axiosSetup.params = params;
  } else {
    axiosSetup.data = params;
  }

  try {
    const result = await maxios(axiosSetup);
    if (result && result.data) {
      return result.data;
    }
  } catch (err) {
    if (err && err.response && err.response.data) {
      if (!err.response.data.isSuccess && err.response.data.errorCode === 1003 && err.response.data.detail === 'Not signed in') {
        window.location.href = '/#/logout';
      }
      return err.response.data;
    }
  }
  return true;
}
