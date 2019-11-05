import { axiosCallApi } from './index';


export const getFeeTables = params => axiosCallApi('fee/list', 'post', params);

export default getFeeTables;
