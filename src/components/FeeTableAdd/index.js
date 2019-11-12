import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import { Row, Col, Input as RInput, Button,
  FormGroup, Label } from 'reactstrap';
import Form from 'react-validation/build/form';
import Pagination from 'react-js-pagination';
import Select from 'react-select';
import SInput from './SInput';
import Creatable from 'react-select/creatable';
import "react-datepicker/dist/react-datepicker.css";
import { filterFeeType, pageOption, DEFAULT_PERPAGE } from './config';
import Table from './table';

import { getFreeTableFake } from '../../apis/testFakeApi';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeType: '',
      status: '',
      tData: [],
      
      perPage: DEFAULT_PERPAGE,
      currentPage: 1,
      hasNext: 0,
      data: {},
      totalRow: 0,
    }
  
    this.getApiFeeTable = this.getApiFeeTable.bind(this);
  }
  
  handleChange(newValue: any, actionMeta: any){
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  }
  
  componentDidMount() {
    const data = this.getApiFeeTable();
    // console.log(data)
  }
  
  componentDidUpdate(prevProps, prevState) {
    const {
      perPage, currentPage,
    } = this.state;
    if (prevState.perPage !== perPage
      || prevState.currentPage !== currentPage) {
      this.getApiFeeTable();
    }
  }
  
  async getApiFeeTable(params = {}) {
    const { perPage, currentPage } = this.state;
    const data = await getFreeTableFake({
      toRow: perPage,
      fromRow: perPage * (currentPage - 1),
      ...params
    });
    this.setState({
      tData: data.list,
      totalRow: data.totalRow
    }, () => {
      const { tData, currentPage: cur } = this.state;
      if (tData && tData.length === 0 && cur > 1) {
        this.setState(prevState => ({
          currentPage: prevState.currentPage - 1,
        }), () => {
          this.getApiFeeTable();
        });
      }
    })
  }
  
  render() {
    const { tHead } = this.props;
    const { feeType, tData, perPage, currentPage, hasNext, status } = this.state;
    const showingOption = `Showing ${currentPage * perPage - perPage + 1} - ${(currentPage * perPage) > hasNext  ? hasNext : (currentPage * perPage)} of ${hasNext} records`
    return (
      <div className="animated fadeIn">
        <Row>
          <Form onSubmit={this.onSubmit} ref={(form) => { this.form = form; }} className="form-submit">
            <div className="border gp-add-fee">
              <h5 className="mb-3">Thông tin chung</h5>
              <Row>
                <Col md='6'>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code">Loại phí:</Label>
                    </Col>
                    <Col lg="7">
                      <Creatable
                        isClearable
                        options={filterFeeType}
                        isMulti={false}
                        placeholder="Tất cả"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code">Mã phí:</Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code">Thuế GTTT:</Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code">Phân loại kí kết:</Label>
                    </Col>
                    <Col lg="7">
                      <Creatable
                        isClearable
                        options={filterFeeType}
                        isMulti={false}
                        placeholder="Tất cả"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="account-settings-pointer" row>
                    <Col lg="5">
                    </Col>
                    <Col lg="7">
                      <Label className="permission-title">
                        <RInput
                          type="checkbox"
                          value="1"
                          name="permissions[]"
                        />
                        Bổ sung kí kết
                      </Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code">Tên mức phí:</Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <div className="border gp-add-fee">
              <h5 className="mb-3">Công thức phí</h5>
              <Row>
                <Col md='6'>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code">Hình thức phí:</Label>
                    </Col>
                    <Col lg="7">
                      <Creatable
                        isClearable
                        options={filterFeeType}
                        isMulti={false}
                        placeholder="Tất cả"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md='6'>
                  <FormGroup row>
                    <Col lg="12" className="label-left">
                      <Label htmlFor="code" className="font-weight-bold">Phí cố định:</Label>
                    </Col>
                  </FormGroup>
                  <FormGroup className="account-settings-pointer" row>
                    <Col lg="5">
                      <Label className="permission-title">
                        <RInput
                          type="checkbox"
                          value="1"
                          name="permissions[]"
                        />
                        Theo số tiền
                      </Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        placeholder="VND"
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="account-settings-pointer" row>
                    <Col lg="5">
                      <Label className="permission-title">
                        <RInput
                          type="checkbox"
                          value="1"
                          name="permissions[]"
                        />
                        Theo phần trăm
                      </Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        placeholder="%"
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code" className="font-weight-bold">Xử lý tối thiếu:</Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        placeholder="VND"
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
                <Col md='6'>
                  <FormGroup row>
                    <Col lg="12" className="label-left">
                      <Label htmlFor="code" className="font-weight-bold">Phí xử lý thanh toán:</Label>
                    </Col>
                  </FormGroup>
                  <FormGroup className="account-settings-pointer" row>
                    <Col lg="5">
                      <Label className="permission-title">
                        <RInput
                          type="checkbox"
                          value="1"
                          name="permissions[]"
                        />
                        Theo số tiền
                      </Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        placeholder="VND"
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="account-settings-pointer" row>
                    <Col lg="5">
                      <Label className="permission-title">
                        <RInput
                          type="checkbox"
                          value="1"
                          name="permissions[]"
                        />
                        Theo phần trăm
                      </Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        placeholder="%"
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col lg="5" className="label-left">
                      <Label htmlFor="code" className="font-weight-bold">Xử lý tối đa:</Label>
                    </Col>
                    <Col lg="7">
                      <SInput
                        addRef={this.addRef}
                        placeholder="VND"
                        ref={(a) => { this.a = a; }}
                        label="Fee Code"
                        type="text"
                        className="form-control"
                        name="code"
                        onChange={this.handleOnchange}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <Col md='12'>
              <FormGroup row>
                <Col className="text-center btn-search">
                  <Button
                    className="icon-search btn btn-primary mt-3"
                  > Áp dụng
                  </Button>
                </Col>
              </FormGroup>
            </Col>
            <Table
              tHead={tHead}
              tableData={tData}
            />
            <div className="fee-table__pagination">
              {
                <Row>
                    <Col xl={{
                        size: 6,
                      }}
                      lg={{
                        size: 6,
                      }}
                      md={{
                        size: 6,
                      }}
                      sm={{
                        size: 12,
                      }}
                      xs={{
                        size: 12,
                      }}
                    >
                      <div className="select-perpage">
                        <div className="select-perpage__info">
                          <Select
                            id="LIMIT_DROPDOWN"
                            value={{
                              value: perPage,
                              label: perPage,
                            }}
                            onChange={(e) => {
                              this.setState({
                                perPage: e.value,
                                currentPage: 1,
                              });
                            }}
                            options={pageOption}
                            placeholder="10"
                            className="select-pagination"
                            menuPlacement="top"
                          />
                          <p>
                            {showingOption}
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xl={{
                        size: 6,
                      }}
                      lg={{
                        size: 6,
                      }}
                      md={{
                        size: 6,
                      }}
                      sm={{
                        size: 12,
                      }}
                      xs={{
                        size: 12,
                      }}
                    >
                      {
                        <Pagination
                          activePage={currentPage}
                          itemsCountPerPage={perPage}
                          totalItemsCount={hasNext}
                          pageRangeDisplayed={5}
                        />
                      }
                    </Col>
                  </Row>
              }
              {
                // tData && tData.length === 0 && <p>Showing 0 - 0 of 0 records</p>
              }
            </div>
          </Form>
        </Row>
      </div>
    );
  }
}

export default withRouter(index);