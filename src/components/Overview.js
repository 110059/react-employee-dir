import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Overview extends React.Component {
   constructor() {
      super();      
      this.state = {
         employee: [],
         subordinates: [],
         error: false,
      }
   }

   componentDidMount() {
    const name = this.props.match.params.name || null;
      if(name) {
        this.getEmployee(name, true)
      } else {
         this.setState({
            error: true,
            employee: [],
            subordinates: []
         })
      }
   }

   async getEmployee(name, first=false) { 
      const apiUrl = 'http://api.additivasia.io/api/v1/assignment/employees/';     
      let response  = await fetch(apiUrl + name);
      let existingSub = [...this.state.subordinates];
      let employee = await response.json();
      if(first) {
         this.setState({
            employee: employee,
            error: false,
         })
      }         
      if(first && employee.length === 1) {
         console.log(employee);
      }
      else if (employee.length === 2) {
         employee[1]["direct-subordinates"].forEach(empName => {     
            existingSub.push(empName);
            this.setState({
               subordinates: existingSub
            })
            this.getEmployee(empName);
         })         
      }     
   }

   render() {     
      const error = this.state.error;
      if(error) {
        return (<h1>Error</h1>)  
      } else {
         return ( 
         <main className="mx-2 my-2">   
         <a class="btn btn-success" href="/" role="button">Back</a>          
         <table className="table table-striped table-dark col-4 align-items-center my-1">
         <thead>
            <tr>
               <th scope="col" className="text-center" colspan="4">Subordinates of employee {this.props.match.params.name}</th>
            </tr>
         </thead>
         <tbody>
            {
               this.state.subordinates.length ? this.state.subordinates.map((sub, index) => {
               return (
                  <tr>
                     <th className="text-right" scope="row">{index+1}.</th>
                     <td className="text-left" colspan="3">{sub}</td>
                  </tr> 
               )
               }) :
               (  <tr>
                     <td className="text-center" colspan="4">No Subordinates!</td>
                  </tr> 
               )
            }                    
         </tbody>
         </table>
         </main>
         )

      }   
   }
}
export default Overview;