import { axiosCallApi } from './index';


export const getFeeTables = params => axiosCallApi('mms/fee/list', 'post', params);

export default getFeeTables;
