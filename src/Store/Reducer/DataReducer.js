
const DataReducer = (state=[],action) => {
  switch (action.type) {
    case "AddData_Action":
      return [...state,action.payload]

      ;
    case "Delete_Action"  :
      return state.filter((element)=> {
        return element.id !== action.payload.id
      })

    case "UpdateData_Action":
      const updatedState=[...state];
      updatedState[action.payload.id-1]={id:action.payload.id,data:action.payload.data}
      return updatedState;


    default:
      return state;
  }
};

export default DataReducer;