import React from 'react';
import { Button } from 'reactstrap';

class SearchBox extends React.Component {
    handleSearch = () => {
        console.log('aaaa')
    }
    render() {
        return(
            <div className="text-center btn-search">
                <Button
                    className="icon-search btn btn-primary"
                    onClick={this.handleSearch}  
                >
                   <i className="icon-magnifier" /> Tìm kiếm
                </Button>
            </div>
        );
    }
}
export default SearchBox;