import React, { Component } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Table
} from 'reactstrap';

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
      currentPage: 1
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
    console.log('currentRow:', this.state);
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
                <td className="font-default">{e.column1}</td>
                <td className="font-default">{e.column2}</td>
                <td className="font-default">{e.column3}</td>
                <td className="font-default">{e.column4}</td>
                <td className="font-default">{e.column5}</td>
                <td className="font-default">{e.column6}</td>
                <td className="font-default">{e.column7}</td>
                <td className="font-default">{e.column8}</td>
                <td className="font-default">{e.column9}</td>
                <td className="font-default">{e.column10}</td>
                <td className="font-default">{e.column11}</td>
                <td className="font-default">{e.column12}</td>
                {
                  this.props.haveDetail && 
                  <td className="text-center table-edit"><button className="btn btn-primary text-white" onClick={() => this.props.gotoDetail()}>{e.column8}</button></td>
                }
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex flex-row-reverse">
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
    );
  }
}

export default Tables;
