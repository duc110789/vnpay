import React from 'react';
import {
  CardHeader,
  CardBody,
  Col,
  FormGroup,
  Card,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './index.scss';
import FeeTable from '../../../components/FeeTable';

class FeeManagerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {},
    };
  }

  render() {
    const { data } = this.state;
    const { changeFeeTable } = this.props;
    return (
      <div className="my-requests">
        <Card className="card-my-requests">
          <CardHeader>
            <Col xs="12">
              <FormGroup style={{ marginBottom: 0 }} row>
                <Col lg="6" style={{ paddingLeft: 0 }}>
                  <span className="text-bold">QUẢN LÝ BẢNG PHÍ</span>
                </Col>
              </FormGroup>
            </Col>
          </CardHeader>
          <CardBody>
            <FeeTable
              // tHead={data.fields}
              // tData={data.data}
              changeFeeTable={changeFeeTable}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default FeeManagerList;
FeeManagerList.propTypes = {
  changeFeeTable: PropTypes.func.isRequired,
};
