import React, { Component } from 'react'; 

import Table from 'react-bootstrap/Table'; 

class Dashboard extends Component {

    constructor(props){
        super(props); 
        this.state = {
            error: null, 
            isLoaded: false, 
            items: []
        }; 
    }

    componentDidMount(){
        fetch("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_name,pl_pnum,pl_orbper,pl_bmassj,st_dist&order=dec&format=json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true, 
                    planets: result
                }); 

                console.log(result); 
            }, 

            (error) => {
                this.setState({
                    isLoaded: true, 
                    error
                }); 
            }

            
        )
    }

    renderTable(planet){
        return  <tr key={planet.pl_name}>
                    <td>{planet.pl_name}</td>
                    <td>{planet.pl_hostname}</td>
                    <td>{planet.pl_pnum}</td>
                    <td>{planet.pl_orbper}</td>
                    <td>{planet.pl_bmassj}</td>
                    <td>{planet.st_dist}</td>                       
                </tr>
    }

    generateBarGraph(planets){  

    }   
    render() {

        const {error, isLoaded, planets} = this.state; 

        if(error){
            return <div>Error: {error.message}</div>
        }
        else if (!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return <Table>
                <thead>
                    <th>Planet Name</th>
                    <th>Host Start Name</th>
                    <th>Number of planets</th>
                    <th>Orbital Period</th>
                    <th>Mass (est)</th>
                    <th>Distance</th>
                </thead>
                <tbody>
                    {planets.slice(0,10).map(planet => this.renderTable(planet))}
                </tbody>
            </Table>
        }
    }
}

export default Dashboard;
