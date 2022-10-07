let eid=0
export const AddData_Action=(data)=>{
  return{
    type:"AddData_Action",
    payload:{
      id:++eid,
      data,
    }
  }
}
export const Delete_Action=(id)=>{
  return{
    type:"Delete_Action",
    payload:{id:id}
  }

}
export const UpdateData_Action=(id,data)=>{
  return{
    type:"UpdateData_Action",
    // updatedId:id,
    payload:{id:id,data},
  }
}