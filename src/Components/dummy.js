import React from 'react';

const Dummy = () => {
  return (
    <div>
      {/*<Table columns={columns} dataSource={selector|| []}> </Table>*/}

      {/*<div>*/}
      {/*  Name:<input type="text" name="name" value={formData.name} onChange={handleChange} style={{color:"navy"}}/>*/}
      {/*  Designation:<input type="text" name="designation" value={formData.designation} onChange={handleChange}  style={{color:"navy"}}/>*/}

      {/*  Experience:<input type="number" name="designation" value={formData.designation} onChange={handleChange}  style={{color:"navy"}}/>*/}
      {/*  <button onClick={handleClick}>Submit</button>*/}
      {/*</div>*/}
      {/* <table style={{border:"2px solid black"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          selector?.map((element,index)=>{
            // console.log("element:",element.data)
            return (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.data.name}</td>
                <td>{element.data.designation}</td>
                <td>{element.data.experience}</td>
                <td> <DeleteOutlined
                    style={{color:"red",marginLeft:"10px"}}
                    onClick={()=>{
                      onDelete(element)
                    }}
                />
                  <EditOutlined style={{color:"yellow",marginLeft:"10px"}} onClick={()=>{
                    onEdit(element)
                  }}/>
                </td>

              </tr>
            )
          })
        }
        </tbody>

      </table> */}
    </div>
  );
};

export default Dummy;