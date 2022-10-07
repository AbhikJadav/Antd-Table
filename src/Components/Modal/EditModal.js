import React from 'react';
import {UpdateData_Action} from "../../Store/Action/DataAction";
import {Form, Input, Modal} from "antd";

const EditModal = ({isEditing,setIsEditing,dispatch,updatedID,editingData,selector,setEditingData}) => {
  return (
    <>
      <Modal
        title="Edit Detail"
        visible={isEditing}
        okText="Update"
        onCancel={()=>setIsEditing(false)}
        onOk={()=> {
          setIsEditing(false)

          Modal.confirm({
            title:`Are you sure want to Edit Data Of "${editingData?.name}"?`,
            okText:"Yes",
            okType:"danger",
            onOk:()=>{
              dispatch(UpdateData_Action(updatedID,editingData))
              console.log("selector:",selector)
              setIsEditing(false)
            }
          })
        }

        }
      >
        <Form>
          <Form.Item
            label={<span style={{color:"black"}}>Name</span>}
          >
            <Input type="text" name="name" value={editingData?.name} onChange={(e)=>{
              setEditingData((pre)=>{
                return {...pre,name:e.target.value}
              })
            }}/>
          </Form.Item>
          <Form.Item
            label={<span style={{color:"black"}}>Designation</span>}
          >
            <Input type="text" name="designation" value={editingData?.designation} onChange={(e)=>{
              setEditingData((pre)=>{
                return {...pre,designation:e.target.value}
              })
            }}/>
          </Form.Item>
          <Form.Item
            label={<span style={{color:"black"}}>Experience</span>}
          >
            <Input type="number" name="experience" value={editingData?.experience} onChange={(e)=>{
              setEditingData((pre)=>{
                return {...pre,experience:e.target.value}
              })
            }} min={0}/>
          </Form.Item>

          <Form.Item
            label={<span style={{color:"black"}}>Joining-Date</span>}
          >
            {/*<DatePicker name="joiningdate" value={formData?.joiningdate} onChange={handleChange} formate="MM-DD-YYYY"/>*/}
            {/*<Input type="number" name="joiningdate"  value={formData?.joiningdate} onChange={handleChange} min={0}/>*/}
            <input type="date" name="joiningdate"  value={editingData?.joiningdate} onChange={(e)=> {
              setEditingData((pre) => {
                return {...pre, joiningdate: e.target.value}
              })
            }}
                   formate="MM-DD-YYYY"/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;