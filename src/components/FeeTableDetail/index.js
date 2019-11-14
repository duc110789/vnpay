import React, { useState } from 'react';
import { Row, Col, Collapse, FormGroup, Button, CardBody, Card } from 'reactstrap';

import './index.scss';

const FeeTableDetail = (props) => {
  
  
  const [isOpen, setIsOpen] = useState(true);
  
  const toggle = () => setIsOpen(!isOpen);

    
    return (
      <div className="page-content">
        <div className="page-content-area">
          <form className="form-horizontal" role="form" action="1-1-DS-Merchant-gui-dang-ky.html">
            <div className="row">
              <div className="col-md-12">
                <div className="widget-box transparent">
                  <div className="widget-header widget-header-flat" onClick={toggle}>
                    <h4 className="widget-title lighter">LÝ DO TỪ CHỐI</h4>
                    <div className="widget-toolbar">
                      <span data-action="collapse"> <i className="ace-icon fa fa-chevron-up" /> </span>
                    </div>
                  </div>
                  <Collapse isOpen={isOpen} className="show-information-1">
                    <Card>
                      <CardBody>
                        <Row>
                          <Col md={6}>
                            <FormGroup row>
                              <Col md={4}>
                                <label>Người từ chối</label>
                              </Col>
                              <Col md={8}>
                                <label><b>Kế toán</b></label>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md={4}>
                                <label>Nội dung</label>
                              </Col>
                              <Col md={8}>
                                <label className="text-danger"><b>Thông tin chung không đúng</b></label>
                              </Col>
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup row>
                              <Col md={4}>
                              <label className="p_top">Thời gian</label>
                              </Col>
                                <Col md={8}>
                                <label><b>01/01/2016 00:00:00</b></label>
                              </Col>
                            </FormGroup>
                            <FormGroup row>
                              <Col md={4}>
                              <label>Chi tiết</label>
                              </Col>
                              <Col md={8}>
                                <label><b>Nhầm LHDN</b></label>
                              </Col>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              </div>
              <div className="col-md-12">
                <div className="widget-box transparent">
                  <div className="widget-header widget-header-flat">
                    <h4 className="widget-title lighter">Thông tin chung</h4>
                    <div className="widget-toolbar">
                      <a href="#" data-action="collapse">
                        <i className="ace-icon fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="widget-body" style={{display: 'block'}}>
                    <div className="widget-main">
                      <div className="box row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Loại phí</label>
                            <div className="col-sm-8">
                              <label>
                                <b>Phí thu merchant</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Phân loại ký kết</label>
                            <div className="col-sm-8">
                              <label>
                                <b>Hợp đồng</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Số lượng mức phí</label>
                            <div className="col-sm-8">
                              <label>
                                <b>3</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Trạng thái</label>
                            <div className="col-sm-8">
                              <label className="label label-sm label-success">
                                <b>Hoạt động</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Người tạo</label>
                            <div className="col-sm-8">
                              <label>
                                <b>Lapnv</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Người chỉnh sửa</label>
                            <div className="col-sm-8">
                              <label>
                                <b>Lapnv</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Thời gian tạo</label>
                            <div className="col-sm-8">
                              <label>
                                <b>20/09/2018 09:00:00</b>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="col-sm-4 control-label p_top">Thời gian chỉnh sửa</label>
                            <div className="col-sm-8">
                              <label>
                                <b>20/09/2018 09:00:00</b>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Người duyệt</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>admin</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Thời gian duyệt</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>20/09/2018 09:00:00</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Người khóa</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>admin</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Thời gian khóa</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>20/09/2018 09:00:00</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Người mở khóa</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>admin</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Thời gian mở khóa</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>20/09/2018 09:00:00</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Người chỉnh sửa</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>admin</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="form-group">
                                <label className="col-sm-5 control-label p_top">Thời gian chỉnh sửa</label>
                                <div className="col-sm-7">
                                  <label>
                                    <b>20/09/2018 09:00:00</b>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.widget-main */}
                  </div>
                  {/* /.widget-body */}
                </div>
                <div className="clearfix">
                </div>
              </div>
              <div className="col-md-12">
                <div className="widget-box transparent">
                  <div className="widget-header widget-header-flat">
                    <h4 className="widget-title lighter">Công thức phí</h4>
                    <div className="widget-toolbar">
                      <a href="#" data-action="collapse">
                        <i className="ace-icon fa fa-chevron-up" />
                      </a>
                    </div>
                  </div>
                  <div className="widget-body">
                    <div className="widget-main">
                      <div className="box">
                        <div className="box-seperate">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Mã phí</label>
                                <div className="col-sm-8">
                                  <label><b>01</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Tên mức phí</label>
                                <div className="col-sm-8">
                                  <label><b>Mức 1</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Thuế GTGT</label>
                                <div className="col-sm-8">
                                  <label><b>10%</b></label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="col-sm-12 control-label p_top"><b>Thông tin công thức phí</b></label>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">HÌnh thức tính</label>
                                <div className="col-sm-8">
                                  <label><b>Theo công thức</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Quy luật tính</label>
                                <div className="col-sm-8">
                                  <label><b /></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Tính theo</label>
                                <div className="col-sm-8">
                                  <label><b /></label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <table className="table table-bordered">
                            <thead>
                            <tr>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Phí cố định</th>
                              <th colSpan={4} className="text-center" bgcolor="#ececec">Phí xử lý thanh toán</th>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Giá trị giao dịch</th>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Số lượng giao dịch</th>
                            </tr>
                            <tr>
                              <th rowSpan={2} className="text-center">Theo số tiền</th>
                              <th rowSpan={2} className="text-center">Theo phần trăm</th>
                              <th rowSpan={2} className="text-center">Theo số tiền</th>
                              <th rowSpan={2} className="text-center">Theo phần trăm</th>
                              <th colSpan={2} className="text-center">Giới hạn phí thanh toán</th>
                              <th rowSpan={2} className="text-center">Từ</th>
                              <th rowSpan={2} className="text-center">Đến</th>
                              <th rowSpan={2} className="text-center">Từ</th>
                              <th rowSpan={2} className="text-center">Đến</th>
                            </tr>
                            <tr>
                              <th className="text-center">Tối thiểu</th>
                              <th className="text-center">Tối đa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center">
                              <td>3.300</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>0.30</td>
                              <td>3.300</td>
                              <td>1.000.000</td>
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="box-seperate">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Mã phí</label>
                                <div className="col-sm-8">
                                  <label><b>02</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Tên mức phí</label>
                                <div className="col-sm-8">
                                  <label><b>Mức 2</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Thuế GTGT</label>
                                <div className="col-sm-8">
                                  <label><b>10%</b></label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="col-sm-12 control-label p_top"><b>Thông tin công thức phí</b></label>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">HÌnh thức tính</label>
                                <div className="col-sm-8">
                                  <label><b>Theo bậc thang</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Quy luật tính</label>
                                <div className="col-sm-8">
                                  <label><b /></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Tính theo</label>
                                <div className="col-sm-8">
                                  <label><b>Tháng</b></label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <table className="table table-bordered">
                            <thead>
                            <tr>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Phí cố định</th>
                              <th colSpan={4} className="text-center" bgcolor="#ececec">Phí xử lý thanh toán</th>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Giá trị giao dịch</th>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Số lượng giao dịch</th>
                            </tr>
                            <tr>
                              <th rowSpan={2} className="text-center">Theo số tiền</th>
                              <th rowSpan={2} className="text-center">Theo phần trăm</th>
                              <th rowSpan={2} className="text-center">Theo số tiền</th>
                              <th rowSpan={2} className="text-center">Theo phần trăm</th>
                              <th colSpan={2} className="text-center">Giới hạn phí thanh toán</th>
                              <th rowSpan={2} className="text-center">Từ</th>
                              <th rowSpan={2} className="text-center">Đến</th>
                              <th rowSpan={2} className="text-center">Từ</th>
                              <th rowSpan={2} className="text-center">Đến</th>
                            </tr>
                            <tr>
                              <th className="text-center">Tối thiểu</th>
                              <th className="text-center">Tối đa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center">
                              <td>3.300</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>0.30</td>
                              <td>3.300</td>
                              <td>1.000.000</td>
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="box-seperate">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Mã phí</label>
                                <div className="col-sm-8">
                                  <label><b>03</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Tên mức phí</label>
                                <div className="col-sm-8">
                                  <label><b>Mức 3</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Thuế GTGT</label>
                                <div className="col-sm-8">
                                  <label><b>10%</b></label>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="col-sm-12 control-label p_top"><b>Thông tin công thức phí</b></label>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">HÌnh thức tính</label>
                                <div className="col-sm-8">
                                  <label><b>Theo bậc thang</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Quy luật tính</label>
                                <div className="col-sm-8">
                                  <label><b>Giá trị giao dịch</b></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Giá trị giao dịch</label>
                                <div className="col-sm-8">
                                  <label><b /></label>
                                </div>
                              </div>
                              <div className="form-group">
                                <label className="col-sm-4 control-label p_top">Tính theo</label>
                                <div className="col-sm-8">
                                  <label><b>Tháng</b></label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <table className="table table-bordered">
                            <thead>
                            <tr>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Phí cố định</th>
                              <th colSpan={4} className="text-center" bgcolor="#ececec">Phí xử lý thanh toán</th>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Giá trị giao dịch</th>
                              <th colSpan={2} className="text-center" bgcolor="#ececec">Số lượng giao dịch</th>
                            </tr>
                            <tr>
                              <th rowSpan={2} className="text-center">Theo số tiền</th>
                              <th rowSpan={2} className="text-center">Theo phần trăm</th>
                              <th rowSpan={2} className="text-center">Theo số tiền</th>
                              <th rowSpan={2} className="text-center">Theo phần trăm</th>
                              <th colSpan={2} className="text-center">Giới hạn phí thanh toán</th>
                              <th rowSpan={2} className="text-center">Từ</th>
                              <th rowSpan={2} className="text-center">Đến</th>
                              <th rowSpan={2} className="text-center">Từ</th>
                              <th rowSpan={2} className="text-center">Đến</th>
                            </tr>
                            <tr>
                              <th className="text-center">Tối thiểu</th>
                              <th className="text-center">Tối đa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center">
                              <td>3.300</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>0.30</td>
                              <td>3.300</td>
                              <td>1.000.000</td>
                              <td />
                              <td />
                              <td />
                              <td />
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* /.col */}
                    </div>
                    {/* /.widget-main */}
                  </div>
                  {/* /.widget-body */}
                </div>
              </div>
            </div>
            <div className="clearfix bottom20" />
            <div className="clearfix form-actions row">
              <div className="col-md-12 text-center">
                <a title="Về danh sách" className="btn bggrey bigger-150" href="13-1-1-qly-bang-phi.html">
                  <i className="fa fa-arrow-left" aria-hidden="true" /> Quay lại</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

export default FeeTableDetail;
FeeTableDetail.propTypes = {
  // changeFeeTable: PropTypes.func.isRequired,
};