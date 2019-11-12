import { axiosCallApiFake } from './fakeApi'

export const getFreeTableFake = params => axiosCallApiFake('danh-sach-phi', 'post', params)

export default getFreeTableFake