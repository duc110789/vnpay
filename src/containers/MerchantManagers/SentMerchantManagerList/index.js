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
import Table from './table';
import Pagination from '../../../components/Pagination';

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
      title: 'DANH SÁCH MERCHANT GỬI ĐĂNG KÝ',
      selectedNameMerchant: null,
      selectedStatusMerchant: null,
      isClearable: false,
      phoneNumber: '',
      email: '',
      startDate: new Date(),
      count: 0,
      limit: 10,
      page: 1,
    }
  }

  handleChange = date => {
    this.setState({
      startDate: date
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
    const { title, isClearable, phoneNumber, email, startDate, selectedNameMerchant, selectedStatusMerchant,
      count, limit, page, hasNext } = this.state;
    console.log(this.state)
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
                      selected={startDate}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <SearchBox />
            <Table />
            <Pagination
              page={page}
              count={count}
              pageSize={limit}
              hasNext={hasNext}
              onChange={(_page, _limit) => this.setState({ page: _page, limit: _limit })}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withRouter(index);