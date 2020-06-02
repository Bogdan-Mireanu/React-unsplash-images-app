import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from'./ImageList';
import "./App.css";


class App extends React.Component{
   state= {images:[]}
   onSearchSubmit= async(term)=>{
     const response = await axios.get("https://api.unsplash.com/search/photos",{
          params:{ query: term, per_page: 30},
          headers:{
            Authorization: "Client-ID T3tQ9NDepnqgV1dwVY1oxpjXNeS04Cc7oLXzSJtU2Jc"
          }
      });
      const data = response.data.results
      this.setState({images:data});
    }


    render (){
        return (
            <div className="ui container myInput">
             <SearchBar onSubmit={this.onSearchSubmit}/>
             <ImageList images={this.state.images}/>
            </div>
            );
    }
}

export default App;