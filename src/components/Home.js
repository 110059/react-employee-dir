import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './SearchForm';

class Home extends React.Component {
   constructor() {
       super();
       this.state = {
           searchKey: "",
           error: false
       }
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit(event) {
    const name = this.state.searchKey;
    if (name) {
        const apiUrl = 'http://api.additivasia.io/api/v1/assignment/employees/';
        fetch(apiUrl + name)
        .then(response => {
            console.log(response)
            if (response.status === 200) {            
              this.props.history.push('/overview/' + name);             
            }  else {
                this.setState({
                    error: `${name} ${response.statusText}(${response.status})`
                })
            }          
        });            
    } 
        event.preventDefault();
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {    
       return (
        <main className="mx-2">
            <SearchForm
                handleChange={this.handleChange}
                data={this.state}
                handleSubmit={this.handleSubmit}
            />  
            <br />
            {
                this.state.error ? (<h2>{this.state.error}</h2>) : ''          
            }
       </main>  )       
     
   }
}
export default Home;