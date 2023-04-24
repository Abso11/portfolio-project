import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import { appRoutes } from 'urls';

export const getData = async <T1, T2>(url: string, params?: T1): Promise<AxiosResponse<T2>> => {
  const options: AxiosRequestConfig = {
    params,
    withCredentials: true
  };
  return axios.get(url, options);
};

export const patchData = async <T, Y>(url: string, data: T): Promise<AxiosResponse<Y>> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'PATCH',
    url,
    data,
    withCredentials: true
  };

  return axios(requestConfig);
};

export const deleteData = async <T, Y>(url: string, data: T): Promise<AxiosResponse<Y>> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'DELETE',
    url,
    data,
    withCredentials: true
  };

  return axios(requestConfig);
};

export const postData = async <T, Y>(url: string, data: T): Promise<AxiosResponse<Y>> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'POST',
    url,
    data,
    withCredentials: true
  };

  return axios(requestConfig);
};

export const handleApiError = (error: AxiosError<Error>): void => {
  if (error.response && error.response.status) {
    const { status } = error.response;

    if (status === 401) {
      window.location.reload();
    }
  }
};
