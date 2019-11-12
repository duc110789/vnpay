import { axiosCallApi } from './index';


export const getFeeTables = (params = {toRow: 2}) => axiosCallApi('mms/fee/list', 'post', params);
export const getCacheStatusByType = params => axiosCallApi(`mms/fee/status/${params.type}`, 'get', params);

export default getFeeTables;
