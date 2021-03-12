import React from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";


function Dashboard(){

    return (<>
        <br/><br/><br/><br/><br/><br/>

        <h1>Dashboard</h1>
        <section className="section colored"><div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s" data-scroll-reveal-id="6" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <AppMap/>
            
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s" data-scroll-reveal-id="6" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
        {/* <AppMap/> */}
        <h1>Covid Map</h1><br/>
        <p>The About Corona COVID-19 API provides statistics via REST API from the World Health Organization Situation Reports, Johns Hopkins CSSE, the U.S. Department of Health and Human Services, The National Health Commission of the People’s Republic of China, The European Centre for Disease Prevention and Control, and China CDC Weekly.

This API retrieves data by country including population, the number of cases confirmed, recovered, critical cases, deaths, recovered per death ratio, cases per million population, and more. The data is updated multiple times a day.</p>
            
        </div>

        </div>
        </div>
        </section>
        
    </>

    );
}
const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const AppMap = () => (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
export default Dashboard;
