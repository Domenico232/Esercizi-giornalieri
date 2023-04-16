

const initialstate = {

    singlesong : {

    },
    footersong:""
}

export const mainReducer = (state = initialstate, action) => {
        
  switch (action.type) {
    case "addlike":
      return {...state,
          singlesong : true
      }
      case "changesong":
        return{...state, footersong : action.payload }
    default:
      return state;
  }
};
