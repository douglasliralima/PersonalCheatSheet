import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';

import Filter from "./components/Filters"
import LineGraphic from "./components/LineGraphic"

function App() {
  const [countryA, setCountryA] = useState("Brazil");
  const [countryB, setCountryB] = useState("China");
  const [dataType, setDataType] = useState("confirmed");

  const [countries, setContries] = useState([]);
  const [days, setDays] = useState([])

  useEffect(async () => {
    let response = await axios({
      url: 'https://covid19.mathdro.id/api/countries',
      method: 'get'
    })
    setContries(response.data.countries.map(({name}) => {
      return name;
    }))

    response = await axios({
      url: 'https://covid19.mathdro.id/api/daily',
      method: 'get'
    })

    setDays(response.data.map((report) => {
      return new Date(report.reportDate);
    }))
  }, []);

  useEffect(() => {
    let date;
    let request;
    days.forEach(async (item, index) => {
      if(item.getMonth() !== 0 && item.getDate() !== 0){
        request = `https://covid19.mathdro.id/api/daily/${item.getMonth()}-${item.getDate()}-${item.getFullYear()}`
        // let response = await axios({
        //   url: request,
        //   method: 'get'
        // });
        console.log(request);
      }
      
     
    })
    
    // const request = 'https://covid19.mathdro.id/api/daily/%s' % (date)
    
  }, [countryA, countryB, dataType]);

  return (
    <div className="App">
      <Row>
        <Col span={12}>
          {/* filtros */}
          <Filter setCountryA = {setCountryA} setCountryB = {setCountryB} 
          setDataType = {setDataType} Countries = {countries}/>
        </Col>
        <Col span={12}>
          {/* Gráficos */}
          <p>
            <LineGraphic/>
            {countryA.toLowerCase() + " " + countryB.toLowerCase() + " " + dataType}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
