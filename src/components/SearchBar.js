import React from 'react';




class SearchBar extends React.Component {

    state= {term: ""};

    onInputChange = (event) =>{
        this.setState({term: event.target.value})
       //event=onChnnage ,target=input , value=whatever you type
        
    };

    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        //calback from parent component
    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input onChange={this.onInputChange} type="text" value={this.state.term} />

                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;