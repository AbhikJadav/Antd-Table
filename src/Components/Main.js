import React from 'react';
import DataTable from "./DataTable";
import 'antd/dist/antd.css';
import "./Style/Style.css"
const Main = () => {
  return (
    // <div>
      <div className="App">
        {/*<header className="App-header">*/}
        <div className="main-wrapper">
          <DataTable/>
        </div>

        {/*</header>*/}

    </div>
  );
};

export default Main;