import React, { useState} from 'react';
import {Modal,Input,Dropdown,Space,Menu} from "antd";
import {EditOutlined,DeleteOutlined,SearchOutlined,BarsOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import { Delete_Action} from "../Store/Action/DataAction";
import DisplayData from "./DisplayData";
import AddModal from "./Modal/AddModal";
import EditModal from "./Modal/EditModal";
import "./Style/Style.css"
import SearchData from "./SearchData";
const DataTable = () => {
  const [formData,setFormData]=useState({
    name:"",
    designation:"",
    experience:"",
    joiningdate:""
  })
  const dispatch=useDispatch()
  const selector=useSelector((state => state.dataReducer))
  const handleChange=(event)=>{
      const {name,value}=event.target;
      setFormData((prev)=>{
        return {
          ...prev,
          [name]:value
        }
      })
  }

  const [isOpen,setIsOpen]=useState(false)
  const [isEditing,setIsEditing]=useState(false)
  const [editingData,setEditingData]=useState(null)
  const [updatedID,setUpdatedId]=useState("")
  const [dataSource,setDataSource]=useState()
  const handleClick=()=>{
    setIsOpen(true)
    // dispatch(AddData_Action(formData))
  }
  const onDelete=(record)=>{
    // return(
    //   <DeleteModal record={record} dispatch={dispatch} selector={selector}/>
    // )
    Modal.confirm({
      title:`Are you sure want to delete "${record.data?.name}"?`,
      okText:"Yes",
      okType:"danger",
      onOk:()=>{
        dispatch(Delete_Action(record.id))
        console.log("selector:",selector)
      }
    })
  }
  const onEdit=(record)=>{
    setIsEditing(true)
    setEditingData({...record.data})
    setUpdatedId(record.id)
    console.log("record:",record)
  }
  const [value,setValue]=useState('');
  const searchData=(e)=>{
    setValue(e.target.value)
    const filterData=selector.filter((element)=>
          element.data.name.includes(e.target.value)

    )
    console.log("filterData:",filterData)
    setDataSource(filterData)
  }
  const [recordData,setRecordData]=useState([])
  const menu =()=> (
    <Menu
      items={[
        {
          label: <><Input prefix={<EditOutlined textstyle={{color:"navy",marginLeft:"10px"}}  onClick={()=>{
            onEdit(recordData)
          }}/>} style={{width:"120px",outline:"none"}} placeholder="Edit Data" readonly  onClick={()=>{
            onEdit(recordData)
          }} /> </>,
          key: '0',
        },
        {
          type: 'divider',
        },
        {
          label: <><Input prefix={ <DeleteOutlined
            style={{color:"red",}}
            onClick={()=>{
              onDelete(recordData)
            }}
          />} style={{width:"120px",outline:"none"}} placeholder="Delete Data" readonly  onClick={()=>{
            onDelete(recordData)
          }} /> </>
           ,
          key: '1',
        },
      ]}
    />
  );


  const columns=[
    {
      key:"id",
      title:"Sr. No",
      dataIndex:"id",
      sorter:(record1,record2)=>{
        return record1.id>record2.id
      }
    },
    {
      key:"id",
      title:"Name",
      dataIndex:"data",
      render:(data)=>data?.name,
      sorter:(record1,record2)=>{
        return record1.data.name>record2.data.name
      }
    },
    {
      key:"id",
      title:"Designation",
      dataIndex:"data",
      render:(data)=>data?.designation,
      sorter:(record1,record2)=>{
        return record1.data.designation > record2.data.designation
      }
    },
    {
      key:"id",
      title:"Experience",
      dataIndex:"data",
      render:(data)=>data?.experience,
      sorter:(record1,record2)=>{
        return record1.data.experience>record2.data.experience
      }
    },
    {
      key:"id",
      title:"Joining Date",
      dataIndex:"data",
      render:(data)=> {
        if(data.joiningdate!=="")
        {
          const date= new Date( data.joiningdate)
          const mm=date.getMonth()+1
          const dd=date.getDate()
          const yyyy=date.getFullYear()
          const convertedDate=mm+"/"+dd+"/"+yyyy
          return convertedDate
        }
        else
        {
          const date= new Date()
          const mm=date.getMonth()+1
          const dd=date.getDate()
          const yyyy=date.getFullYear()
          const convertedDate=mm+"/"+dd+"/"+yyyy
          return convertedDate
        }



      },
    },
    {
      title: "Action",
      render:(record)=>{
        return(
          <>
            <Dropdown overlay={menu} trigger={['click']}>
                <Space>
                  <BarsOutlined style={{cursor:"pointer"}} onClick={()=>{setRecordData(record)}}/>
                </Space>
            </Dropdown>

            {/*<EditOutlined style={{color:"navy",marginLeft:"10px"}} onClick={()=>{*/}
            {/*  onEdit(record)*/}
            {/*}}/>*/}

            {/*<DeleteOutlined*/}
            {/*  style={{color:"red",marginLeft:"10px"}}*/}
            {/*  onClick={()=>{*/}
            {/*    onDelete(record)*/}
            {/*  }}*/}
            {/*/>*/}
          </>
        )
      }
    }
  ]
  const [searchIsopen,setSearchIsOpen]=useState(false)
  return (
    <>
    <div className="main">
      <div className="header">
        <div className="search">
          <SearchData searchIsopen={searchIsopen} setSearchIsOpen={setSearchIsOpen} value={value} searchData={searchData}/>


        </div>
        <div className="addButton">
          <AddModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            dispatch={dispatch}
            formData={formData}
            setDataSource={setDataSource}
            selector={selector}
            setFormData={setFormData}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </div>

      </div>


      <br/>

      <div className="displayData">
        <DisplayData
          columns={columns}
          dataSource={dataSource}
          value={value}
          selector={selector}
        />
      </div>

    </div>


     {/*edit code */}
      <EditModal
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        dispatch={dispatch}
        updatedID={updatedID}
        editingData={editingData}
        selector={selector}
        setEditingData={setEditingData}
      />

    </>
  );
};

export default DataTable;