import React from 'react';

class SearchBar extends React.Component {
    state = {val : ''}
    formSubmitted = (e) =>{
        e.preventDefault();
        this.props.submit(this.state.val)
    }
    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.formSubmitted} className="ui form">
                    <input type="text" value={this.state.val} onChange={(e)=>{this.setState({val: e.target.value})}}/>
                </form>
            </div>
        )
    }
}

export default SearchBar;