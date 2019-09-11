import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';
import { Card, CardHeader, CardBody, Row, Col,
  FormGroup, Label, Select } from 'reactstrap'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'DANH SÁCH MERCHANT GỬI ĐĂNG KÝ',
      nameMerchant: 'aaa',
    }
  }
  
  render() {
    const { title, nameMerchant } = this.state;
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
                      value={merchantSelected}
                      options={nameMerchant}
                      isMulti={false}
                      filterOption={filterOption}
                      onChange={(event) => {
                        this.setState({
                          departmentsSelected: event,
                        });
                      }}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md='6'>
col2
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default withRouter(index);