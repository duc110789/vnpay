import React from 'react';
import './table.scss';

function Table(props) {
  const {tableData} = props;
  return (
    <div className="fee-table_table fee-table-add">

      <table className="table fee-table__table">
        <thead>
        <tr>
          <th>STT</th>
          <th>Loại phí</th>
          <th>Phân loại ký kết</th>
          <th>Ma Phi</th>
          <th>Ten Muc Phi</th>
          <th>Thue GTGT</th>
          <th>Cong Thuc Tinh</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
        </thead>
        <tbody>
        {
          tableData && tableData.map((data, index) => (
          <tr key={data.ID}>
            <td>{index + 1}</td>
            <td>{data.LOAI_PHI}</td>
            <td>{data.PHAN_LOAI_KI_KET}</td>
            <td>{data.MA_PHI}</td>
            <td>{data.TEN_MUC_PHI}</td>
            <td>{data.THUE_GTGT}</td>
            <td>{data.CONG_THUC}</td>
            <td>{data.TRANG_THAI}</td>
            <td>
              <a className='p-1' data-toggle="modal" data-target="#modalDetail">
                <i className="green fa fa-info-circle bigger-130" data-toggle="tooltip" data-placement="top" title=""
                   data-original-title="Chi tiết"></i>
              </a>
              <a className='p-1' data-toggle="modal" data-target="#modalEdit">
                <i className="blue fa fa-edit bigger-130" data-toggle="tooltip" data-placement="top" title=""
                   data-original-title="Cập nhật"></i>
              </a>
              <a className='p-1' href="" data-toggle="modal" data-target="#modalDelete">
                <i className="grey fa fa-trash bigger-130" data-toggle="tooltip" data-placement="top" title=""
                   data-original-title="Xóa"></i>
              </a>
            </td>
          </tr>
          ))
        }
        </tbody>
      </table>
      }
      {
        tableData && tableData.length === 0 && <div className="empty-row"> Không tìm thấy dữ liệu</div>
      }
    </div>
  );
}

export default Table;
