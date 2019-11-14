import React from 'react';
import './table.scss';
import { Button } from 'reactstrap';

function Table(props) {
  const { tableData } = props;
  return (
    <div className="fee-table_table">
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
          {
            tableData && tableData.map((data, index) => (
              <tr key={data.id}>
                <td>{data.rowNum}</td>
                <td>{data.feeType}</td>
                <td>{data.classifySigning}</td>
                <td>{data.countFeeCode}</td>
                <td className="fee-status">
                  {
                    data.status === 1 && (
                      <span className="status-active">
                        Hoạt động
                      </span>
                    ) || data.status === 2 && (
                      <span className="status-initial">
                        Khởi tạo
                      </span>
                    ) || data.status === 3 && (
                      <span className="status-expire">
                        Hết hạn
                      </span>
                    ) || data.status === -1 && (
                      <span className="status-lock">
                        Khóa
                      </span>
                    )
                  }
                </td>
                <td className="icon-fee">
                  <Button>
                    <i className="icon-info" />
                  </Button>
                  {' '}
                  <Button>
                    <i className="icon-note" />
                  </Button>
                  {' '}
                  {
                    data 
                    && data.status === 1 && (
                      <Button className="close-lock">
                        <i className="icon-lock" />
                      </Button>
                    ) ||
                    data 
                    && data.status === -1 && (
                      <Button className="close-lock">
                        <i className="icon-lock" />
                      </Button>
                    )
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        tableData && tableData.length === 0 && <div className="empty-row"> Không tìm thấy dữ liệu</div>
      }
    </div>
  );
}

export default Table;
