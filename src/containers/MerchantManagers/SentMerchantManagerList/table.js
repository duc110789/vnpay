import React from 'react';
import Row from './table.row';
import { Table as RTable } from 'reactstrap';

class Table extends React.Component {
  render() {
    return(
      <RTable className="table-common responsive table-bordered mt-4">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Merchant</th>
            <th>Họ và tên</th>
            <th>Số ĐT</th>
            <th>Tên Thương Hiệu</th>
            <th>Website TMĐT</th>
            <th>Dịch vụ Cổng TT</th>
            <th>Dịch vu VNPAY QR</th>
            <th>Ngày tạo</th>
            <th>User xử lý</th>
            <th>Ngày xử lý</th>
            <th>Tình trạng</th>
          </tr>
        </thead>
        <tbody>
          <Row />
          {/* <NoResultRow /> */}
        </tbody>
      </RTable>
    );
  }
}
export default Table;