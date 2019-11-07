export const DEFAULT_PERPAGE = 5;
export const pageOption = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
];
export const filterFeeType = [
  {
    value: '', label: 'Tất cả',
  },
  {
    value: 'Fee1', label: 'Phí 1',
  },
  {
    value: 'Fee2', label: 'Phí 2',
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
