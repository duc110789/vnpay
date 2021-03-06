import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import {
  Row, Col, Label, FormGroup, Button,
} from 'reactstrap';
import './index.scss';
import Select from 'react-select';
import { pageOption, getFeeType, DEFAULT_PERPAGE, filterFeeType } from './config';
import Table from './Table';
import { getFeeTables, getCacheStatusByType } from '../../apis/fee-manager';
import { da } from 'date-fns/locale';


class FeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeType: 0,
      tData: [],
      currentPage: 1,
      perPage: DEFAULT_PERPAGE,
      totalRow: 0,
      data: {},
    };
    this.getApiFeeTable = this.getApiFeeTable.bind(this);
    this.addButtonAction = this.addButtonAction.bind(this);
    this.searchFee = this.searchFee.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getFeeType = this.getFeeType.bind(this);
    this.getClassifySigning = this.getClassifySigning.bind(this);
    this.getFeeStatus = this.getFeeStatus.bind(this);
  }

  componentDidMount() {
    this.getApiFeeTable();
    this.getFeeType();
    this.getClassifySigning();
    this.getFeeStatus();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      perPage, currentPage,
    } = this.state;
    if (prevState.perPage !== perPage || prevState.currentPage !== currentPage) {
      this.getApiFeeTable();
    }
  }

  async getApiFeeTable(params = {}) {
    const { perPage, currentPage } = this.state;
    const data = await getFeeTables({
      toRow:  currentPage*perPage,
      fromRow: perPage*currentPage - perPage,
      ...params,
    });
    this.setState({
      tData: data.list,
      totalRow: data.totalRow
  })
}

  async getFeeType() {
    const datas1 = await getCacheStatusByType({
      type: 'FEE_TYPE',
    });
  }

  async getClassifySigning(params = {}) {
    const datas2 = await getCacheStatusByType({
      type: 'CLASSIFY_SIGNING',
      ...params
    });
  }

  async getFeeStatus(params = {}) {
    const datas3 = await getCacheStatusByType({
      type: 'FEE_STATUS',
      ...params
    });
    console.log('datas3', datas3.list)
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  searchFee() {
    this.getApiFeeTable();
  }

  addButtonAction() {
    window.location.href = ('/#/fee/list/add');
  }

  render() {
    const { feeType, tData, perPage, currentPage, status, totalRow } = this.state;
    const showingOption = `Showing ${currentPage * perPage - perPage + 1} - ${(currentPage * perPage) > totalRow ? totalRow : (currentPage * perPage)} of ${totalRow} records`
    return(
      <div>
        <div className="animated fadeIn">
          <Row>
            <Col md='6'>
              <FormGroup row>
                <Col lg="5" className="label-left">
                  <Label htmlFor="code">Loại phí:</Label>
                </Col>
                <Col lg="7">
                  <Select
                    id="LIMIT_DROPDOWN"
                    options={getFeeType}
                    placeholder="Tất cả"
                    className="select-pagination select-pagination__top"
                    menuPlacement="bottom"
                    onChange={selectedOption => this.setState({
                      feeType: selectedOption.value,
                    })}
                    value={{
                      value: feeType,
                      label: (feeType || 'Tất cả'),
                    }
                    }
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
                  <Select
                    id="LIMIT_DROPDOWN"
                    // options={filterFeeType}
                    placeholder="Tất cả"
                    className="select-pagination select-pagination__top"
                    menuPlacement="bottom"
                    onChange={selectedOption => this.setState({
                      feeType: selectedOption.value,
                    })}
                    value={{
                      value: feeType,
                      label: (feeType || 'Tất cả'),
                    }
                    }
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md='6'>
              <FormGroup row>
                <Col lg="5" className="label-left">
                  <Label htmlFor="code">Mức phí:</Label>
                </Col>
                <Col lg="7">
                  <Select
                    id="LIMIT_DROPDOWN"
                    options={filterFeeType}
                    placeholder="Tất cả"
                    className="select-pagination select-pagination__top"
                    menuPlacement="bottom"
                    onChange={selectedOption => this.setState({
                      feeType: selectedOption.value,
                    })}
                    value={{
                      value: feeType,
                      label: (feeType || 'Tất cả'),
                    }
                    }
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
                    id="LIMIT_DROPDOWN"
                    placeholder="Tất cả"
                    className="select-pagination select-pagination__top"
                    menuPlacement="bottom"
                    onChange={selectedOption => this.setState({
                      status: selectedOption.value,
                    })}
                    value={{
                      value: status,
                      label: (status || 'Tất cả'),
                    }
                    }
                  />
                </Col>
              </FormGroup>
            </Col>
            <Col md='6'>
              <FormGroup row>
                <Col className="text-right btn-search">
                  <Button
                    className="icon-search btn btn-primary"
                    onClick={this.searchFee}
                  >
                    <i className="icon-magnifier" /> Tìm kiếm
                  </Button>
                </Col>
              </FormGroup>
            </Col>
            <Col md='6'>
              <FormGroup row>
                <Col className="text-left btn-search">
                  <Button
                    onClick={this.addButtonAction}
                    className="icon-search btn btn-primary"
                  >
                    <i className="icon-plus" /> Thêm mới
                  </Button>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Table
            // tHead={tHead}
            tableData={tData}
          />
        </div>
        <div className="fee-table__pagination">
          {
            tData && tData.length !== 0 && (
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
                        placeholder="5"
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
                    tData && tData.length > 0
                    && (
                      <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={perPage}
                        totalItemsCount={totalRow}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange}
                      />
                    )
                  }
                </Col>
              </Row>
            )
          }
          {
            tData && tData.length === 0 && <p>Showing 0 - 0 of 0 records</p>
          }
        </div>
      </div>
    )
  }
}

export default FeeTable;
FeeTable.propTypes = {
  changeFeeTable: PropTypes.func.isRequired,
  getFeeType: PropTypes.object.isRequired,
};