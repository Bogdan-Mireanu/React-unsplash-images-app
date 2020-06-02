import React from "react";

class SearchBar extends React.Component{

 state = {
     inputText: ''
 }

 onFormSubmit = (e) => {
     e.preventDefault();
     this.props.onSubmit(this.state.inputText);
 }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image search</label>
                       <input type="text" 
                       value={this.state.inputText} 
                       onChange={(event) => this.setState({inputText: event.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;