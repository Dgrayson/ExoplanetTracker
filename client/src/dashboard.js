import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 

import Table from 'react-bootstrap/Table'; 

function Dashboard(){

    const [planets, setData] = useState({data: []}); 

    useEffect(async () => {
        const result = await axios(
            "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_name,pl_pnum,pl_orbper,pl_bmassj,st_dist&order=dec&format=json"
        ); 

        setData(result.data); 
    }); 


    function filltable(planet){
        <tr key={planet.pl_name}>
            <td>{planet.pl_name}</td>
            <td>{planet.pl_hostname}</td>
            <td>{planet.pl_pnum}</td>
            <td>{planet.pl_orbper}</td>
            <td>{planet.pl_bmassj}</td>
            <td>{planet.st_dist}</td>
        </tr>
    }


    function renderTable(planets) {

        if (planets.data != null)
            return planets.data.slice(0, 10).map(planet => {
                <tr key={planet.pl_name}>
                    <td>{planet.pl_name}</td>
                    <td>{planet.pl_hostname}</td>
                    <td>{planet.pl_pnum}</td>
                    <td>{planet.pl_orbper}</td>
                    <td>{planet.pl_bmassj}</td>
                    <td>{planet.st_dist}</td>
                </tr>

            });
        else
            return <div>Hello</div>
    }

    function handleChange(event){
        this.props.onChange(event.target.value); 
    }

    return  <div>

        <div>There are {planets.length} confimred exoplanets</div>
        <Table onChange={handleChange}>
                <thead>
                    <tr>
                        <th>Planet Name</th>
                        <th>Host Start Name</th>
                        <th>Number of planets</th>
                        <th>Orbital Period</th>
                        <th>Mass (est)</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    { renderTable(planets)}
                </tbody>
            </Table>

    </div>
        
 }

export default Dashboard;
