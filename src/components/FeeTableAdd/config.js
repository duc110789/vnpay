export const DEFAULT_PERPAGE = 10;
export const pageOption = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];
export const filterFeeType = [
  {
    value: '', label: 'Tất cả',
  },
  {
    value: 'Phí trả đơn vị TT ', label: 'Phí trả đơn vị TT',
  },
  {
    value: 'Phí thu MasterMerchant ', label: 'Phí thu masterMerchant',
  },
];
export const filterStatus = [
  {
    value: '', label: 'All Status',
  },
  {
    value: 'Approved', label: 'Approved',
  },
  {
    value: 'Pending', label: 'Pending',
  },
  {
    value: 'Rejected', label: 'Rejected',
  },
  {
    value: 'Discarded', label: 'Discarded',
  },
];

export default {
  DEFAULT_PERPAGE, pageOption, filterFeeType, filterStatus,
};
