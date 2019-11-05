import React, { Component } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from 'reactstrap';
import Select from 'react-select';

const pageOption = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: props.headers,
      rows: [],
      rowSelected: null,
      currentRow: [],
      numberRecord: props.numberRecord ? props.numberRecord : 8,
      listPage: [],
      numberPage: 0,
      currentPage: 1,
      selectedPageOption: { value: 10, label: '10' }
    };
  }

  componentDidMount() {
    const rows = this.props.rows;
    const morePage = rows.length % this.state.numberRecord > 0 ? 1 : 0;
    const numberPage = Math.floor(rows.length / this.state.numberRecord) + morePage;
    const listPage = [];
    for (let i = 0; i < numberPage; i++) {
      listPage.push(i);
    }
    this.setState({ 
      rows,
      listPage,
      numberPage,
      currentRow: this.getCurrentRecords(this.state.currentPage-1,rows)
    });
  }

  getCurrentRecords(currentPage,rows){
   return rows.filter(e => rows.indexOf(e) >= currentPage * this.state.numberRecord && rows.indexOf(e) < currentPage * this.state.numberRecord + this.state.numberRecord )
  }

  handleChangePage(page){
    if(page === this.state.currentPage) return;
    this.setState({
      currentRow: this.getCurrentRecords(page-1,this.state.rows),
      currentPage: page
    })
  }
  handlePreviousPage() {
    if(this.state.currentPage === 1) return;
    this.setState({
      currentPage: this.state.currentPage -1,
      currentRow: this.getCurrentRecords(this.state.currentPage - 2,this.state.rows)
    });
  }

  handleNextPage(){
    if(this.state.currentPage === this.state.numberPage) return;
    this.setState({
      currentPage: this.state.currentPage + 1,
      currentRow: this.getCurrentRecords(this.state.currentPage,this.state.rows)
    });
  }

  handleBridgeDetail() {
    this.props.history.push('/bridge-list/bridge-detail');
  }

  selectedRow(rowSelected){
    if(this.props.canClick && this.props.selectedRow){
      this.setState({ rowSelected });
      this.props.selectedRow();
    }
  }

  render() {
    const { selectedPageOption } = this.state;
    return (
      <div className="animated fadeIn">
        <Table className="table-common responsive table-bordered mt-4">
          <thead className="thead-bridge">
            <tr>
              {this.state.headers.map(e => (
                <th key={e} style={{ fontSize: 14 }} className="font-default">{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.currentRow.map((e, index) => (
              <tr key={index} onClick={() => this.selectedRow(e) } style={{ backgroundColor: this.state.rowSelected != null && this.state.currentRow.indexOf(e) === this.state.currentRow.indexOf(this.state.rowSelected) ?  '#D6EEF7' : ''}}>
                <td className="font-default text-center">{e.column1}</td>
                <td className="font-default">{e.column2}</td>
                <td className="font-default">{e.column3}</td>
                <td className="font-default">{e.column4}</td>
                <td className="font-default">{e.column5}</td>
                <td className="font-default">{e.column6}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="Pagination-container">
          <div className="page-per-size pag-left">
            <span>Hiển thị</span>
              <Select
                id="LIMIT_DROPDOWN"
                value={selectedPageOption}
                onChange={(e) => {
                  this.setState({
                    selectedPageOption: e,
                    page: 1,
                  });
                }}
                options={pageOption}
                placeholder="10"
                className="select-pagination"
                menuPlacement="top"
              />
              <span>bản ghi</span> |
              <div className="d-inline-block ml-1">Hiển thị từ <strong>1</strong> đến <strong>10</strong> của <strong>12</strong> bản ghi</div>
            </div>
          <div className="pag-right">
            <Pagination>
              {
                this.state.numberPage > 1 && (
                <PaginationItem>
                  <PaginationLink previous onClick={() => this.handlePreviousPage()} tag="button" />
                </PaginationItem>
                )
              }
              {this.state.listPage.map((e, index) => (
                <PaginationItem key={index} active={this.state.currentPage === e+1 ? true : false}>
                  <PaginationLink tag="button" onClick={() => this.handleChangePage(e+1)} className="font-default">{e +1}</PaginationLink>
                </PaginationItem>
              ))}
              {
                this.state.numberPage > 1 && (
                <PaginationItem>
                  <PaginationLink onClick={() => this.handleNextPage()} next tag="button" />
                </PaginationItem>
                )
              }
            </Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default Tables;
