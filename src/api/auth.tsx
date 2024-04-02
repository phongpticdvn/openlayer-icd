import axios from 'axios';
import { BaseUrl } from './base';

export const AuthApi = {
  signin(params = {}) {
    return axios.get(BaseUrl + '/signin', { params: params })
  },

}