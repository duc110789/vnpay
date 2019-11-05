import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import Select from 'react-select';
import { Card, CardHeader, CardBody, Row, Col, Input,
  FormGroup, Label } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchBox from '../../../components/SearchBox';
// import Table from '../../../components/Table';
import dataInspection from '../../../MockData/merchantlist';

const nameMerchant = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const statusMerchant = [
  { value: 'chưa xử lý', label: 'Chưa xử lý' },
  { value: 'đã xử lý', label: 'Đã xử lý' }
];
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Thêm mới Merchant',
      selectedNameMerchant: null,
      selectedStatusMerchant: null,
      isClearable: false,
      phoneNumber: '',
      email: '',
      startDate: new Date(),
      startDate1: new Date()
    }
    this.titleTable = [
      'STT',
      'Tên Merchant',
      'Họ và tên',
      'Số ĐT',
      'Tên Thương Hiệu',
      'Website TMĐT',
      'Dịch vụ Cổng TT',
      'Dịch vu VNPAY QR',
      'Ngày tạo',
      'User xử lý',
      'Ngày xử lý',
      'Tình trạng'
    ]
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  }

  handleChange1 = date => {
    this.setState({
      startDate1: date
    });
  }

  handleNameMerchant = selectedNameMerchant => {
    this.setState({
      selectedNameMerchant,
    });
  }

  handleStatusMerchant = selectedStatusMerchant => {
    this.setState({
      selectedStatusMerchant,
    });
  }

  handleOnchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    const { title, isClearable, phoneNumber, email, startDate, startDate1, selectedNameMerchant, selectedStatusMerchant } = this.state;
    console.log(this.state.selectedNameMerchant)
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <span className="text-bold title-header">{title}</span>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md='6'>
                <FormGroup row>
                  <Col lg="5" className="label-left">
                    <Label htmlFor="code">Tên Merchant:</Label>
                  </Col>
                  <Col lg="7">
                    <Select
                      value={selectedNameMerchant}
                      onChange={this.handleNameMerchant}
                      options={nameMerchant}
                      isClearable={isClearable}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col lg="5" className="label-left">
                    <Label htmlFor="code">Số điện thoại:</Label>
                  </Col>
                  <Col lg="7">
                    <Input
                      addRef={this.addRef}
                      value={phoneNumber}
                      label="Phone Number"
                      type="text"
                      className="form-control"
                      name="phoneNumber"
                      onChange={this.handleOnchange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col lg="5" className="label-left">
                    <Label htmlFor="code">Email:</Label>
                  </Col>
                  <Col lg="7">
                    <Input
                      addRef={this.addRef}
                      value={email}
                      label="Phone Number"
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={this.handleOnchange}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md='6'>
                <FormGroup row>
                  <Col lg="5" className="label-left">
                    <Label htmlFor="code">Trạng thái:</Label>
                  </Col>
                  <Col lg="7">
                    <Select
                      value={selectedStatusMerchant}
                      onChange={this.handleStatusMerchant}
                      options={statusMerchant}
                      isClearable={isClearable}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col lg="5" className="label-left">
                    <Label htmlFor="code">Từ ngày:</Label>
                  </Col>
                  <Col lg="7">
                    <DatePicker
                      selected={startDate}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col lg="5" className="label-left">
                    <Label htmlFor="code">Đến ngày:</Label>
                  </Col>
                  <Col lg="7">
                    <DatePicker
                      selected={startDate1}
                      onChange={this.handleChange1}
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <SearchBox />
            {/* <Table rows={dataInspection} headers={this.titleTable} /> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withRouter(index);