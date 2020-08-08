import React from 'react'; 

class SearchBar extends React.Component {
    state = {
        term: ''
    }; 

    onFormSubmit = (event) => {
        event.preventDefault(); 
        this.props.onSubmit(this.state.term); 
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form"
                onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <div className="ui action input">
                            <input  
                            placeholder="Search..."
                            type="text"
                            value = {this.state.term} 
                            onChange={(e) => 
                            this.setState ({term: e.target.value})}/>
                            <button className="ui button" type="submit">Search</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar; 