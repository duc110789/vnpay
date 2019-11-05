export default {
  items: [
    {
      name: 'Quản lý Merchant',
      url: '/merchant',
      icon: 'icon-people',
      children: [
        {
          name: 'Danh sách Merchant gửi đăng ký',
          url: '/merchant/sent-merchant-list',
        },
        {
          name: 'Thêm mới Merchant',
          url: '/merchant/add-edit-merchant',
        },
      ]
    },
    {
      name: 'Quản lý phí',
      url: '/fee',
      icon: 'icon-people',
      children: [
        {
          name: 'Quản lý bảng phí',
          url: '/fee/list',
        },
        {
          name: 'Quản lý module phí thu Merchant',
          url: '/fee-merchant/list',
        },
      ]
    }
  ],
};
