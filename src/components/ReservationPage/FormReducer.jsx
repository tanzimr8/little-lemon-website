export 
 const FormReducer = (state,action)=>{
    switch(action.type){
      case "HANDLE DATE CHANGE" : 
      return {
        ...state,
        [action.field]: action.payload,
      };
      case "HANDLE TIME CHANGE" : 
      return {
        ...state,
        [action.field]: action.payload,
      };
      case "HANDLE GUEST NUMBER CHANGE" : 
      return {
        ...state,
        [action.field]: action.payload,
      };
      case "HANDLE OCCASSION CHANGE" : 
      return {
        ...state,
        [action.field]: action.payload,
      };
      default : return state;
    }
  }
  