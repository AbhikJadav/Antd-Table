import React from 'react';
import {SearchOutlined} from "@ant-design/icons";
import {Input} from "antd";

const SearchData = ({searchIsopen,setSearchIsOpen,value,searchData}) => {
  return (
    <>
      {
        searchIsopen?"":<SearchOutlined  onClick={()=>setSearchIsOpen(true)} className="search"/>
      }

      {
        searchIsopen&&
        <Input placeholder="searchData" value={value} onChange={searchData} prefix={<SearchOutlined/>} className="search"/>
      }
    </>
  );
};

export default SearchData;