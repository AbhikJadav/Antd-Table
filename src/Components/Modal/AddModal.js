import React from 'react';
import {Button, Form, Input, Modal,Alert,message} from "antd";
import {AddData_Action} from "../../Store/Action/DataAction";

const AddModal = ({isOpen,setIsOpen,dispatch,formData,setDataSource,selector,setFormData,handleChange,handleClick}) => {
  return (
    <>
      <Button type="primary" onClick={handleClick}> Add New Employee</Button>
      <Modal
        title="Add Employee Detail"
        visible={isOpen}
        okText="Save"
        onCancel={()=>setIsOpen(false)}
        onOk={()=>{

          setTimeout(()=>{
            if(formData.name!=="" || formData.designation!==""||formData.experience!==""||formData.joiningdate!=="")
            {
              dispatch(AddData_Action(formData))

              setDataSource(selector)
              setFormData({
                name:"",
                designation:"",
                experience:"",
                joiningdate:"",
              })
              message.success("Data Added Successfully")
            }
            else
            {
              message.warning("Please Fillup All details")
              
            }

          },50)


          setIsOpen(false)

        }}
      >
        <div >
          <Form>
            <Form.Item
              label={<span style={{color:"black"}} className="formLabel">Name</span>}
            >
              <Input type="text" name="name" value={formData?.name} onChange={handleChange} required/>
            </Form.Item>
            <Form.Item
              label={<span style={{color:"black"}} className="formLabel">Designation</span>}
            >
              <Input type="text" name="designation"  value={formData?.designation} onChange={handleChange} required/>
            </Form.Item>
            <Form.Item
              label={<span style={{color:"black"}} className="formLabel">Experience</span>}
            >
              <Input type="number" name="experience"  value={formData?.experience} onChange={handleChange} min={0} required/>
            </Form.Item>
            <Form.Item
              label={<span style={{color:"black"}} className="formLabel">Joining-Date</span>}
            >
              <input type="date" name="joiningdate"  value={formData?.joiningdate} onChange={handleChange} formate="MM-DD-YYYY" required/>
            </Form.Item>
          </Form>

        </div>


      </Modal>

    </>
  );
};

export default AddModal;