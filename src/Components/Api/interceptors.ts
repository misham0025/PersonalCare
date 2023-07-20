/* eslint-disable arrow-body-style */
import { getLocalStorageItem } from '../Services/localStorage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/* eslint no-param-reassign: "error" */
export const requestInterceptor = async (config: any) => {
  let token = getLocalStorageItem('AUTH_TOKEN')
  if (token) config.headers.common.Authorization = token
  return config
}

export const responseInterceptor = (response: any) => {
  return response.data
}
