
const initialData= {count:999}
const counterReducer =(state=initialData,action) =>{

    switch(action.type){
        case "Increase":
            return { count: ++state.count }
        case "Decrease":
            return { count: --state.count }
        case "Reset":
            return { count: 0 }
        default:
            return state;
    }

}
export default counterReducer