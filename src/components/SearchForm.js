import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchForm(props) {
    return (
        <main>
          <form onSubmit={props.handleSubmit}>
            <div className="form-row align-items-center">              
              <div className="col-4 align-items-center my-4">
                <input 
                  type="text" 
                  autoComplete="off"
                  name="searchKey"
                  value={props.data.searchTerm}
                  placeholder="Search Employee"
                  onChange={props.handleChange}
                  className="form-control mb-2"
                />
              </div>               
                <div className="col-auto">
                    <input type="submit" value="Search" />
                </div> 
              </div> 
          </form>
      </main>
    )
}
export default SearchForm;