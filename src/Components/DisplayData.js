import React from 'react';
import {Table} from "antd";

const DisplayData = ({columns,dataSource,value,selector}) => {
  return (
    <>
      <Table columns={columns}
        // dataSource={selector||[]}
             dataSource={value===""?selector||[]:dataSource}
      > </Table>
    </>
  );
};

export default DisplayData;