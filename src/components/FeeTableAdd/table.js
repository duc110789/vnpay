import React from 'react';
import './table.scss';

function Table(props) {
  const { tableData } = props;
  return (
    <div className="fee-table_table fee-table-add">
      <table className="fee-table__table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Loại phí</th>
            <th>Phân loại ký kết</th>
            <th>Số lượng mức phí</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
      {
        tableData && tableData.length === 0 && <div className="empty-row"> Không tìm thấy dữ liệu</div>
      }
    </div>
  );
}

export default Table;
