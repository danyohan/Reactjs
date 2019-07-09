import React, { Component } from "react";
import "./App.css";
import { Route, IndexRoute } from 'react-router';
import Header from './components/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.stateDetail = { response: "" };
        this.showDetail = this.showDetail.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    showDetail(e, id) 
    {
        e.preventDefault();
        this.callDetail(id);
    
    }

    callDetail(id)
    {
        fetch(`http://localhost:9000/detailUsers?id=${id}`,{
            method: "GET",
        }
        )
        .then(res => res.json())
        .then(res => this.setState({ response: res }))
        .catch(err => err);
        

    }

   parseData()
    {
        if (this.state.apiResponse.data)
        {
            return this.state.apiResponse.data.map((data, i) =>{
                return (
                <tr key={data.id}>
                    <td>
                      <img  className="img" src={data.avatar}/>
                    </td>
                    <td> <a href="#" onClick={(e) => this.showDetail(e, data.id)}>{data.first_name}</a> </td>
                    <td>{data.last_name}</td>
                </tr>
                )
            })
        }
    }

    render() {
        return(

            <div className="App">
            <Header></Header>
            <table className="info">
                <thead>
                    <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                     {this.parseData()}
                </tbody>
            </table>
              <div className="content">
             
             </div>
            </div>

        )
       }
}
	

export default App;

