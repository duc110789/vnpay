import React from 'react';

class tableRow extends React.Component {
  render() {
    const { item } = this.props;
    return(
      <tr>
        <td>{item && item.code}</td>
        <td>{item && item.name}</td>
        <td>{item && item.type.name}</td>
        <td>{item && item.team.name}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
        <td>{item && item.code}</td>
      </tr>
    );
  }
}
export default tableRow;