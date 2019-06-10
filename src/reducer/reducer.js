let tab=[{
text:'react',
isDone:false
},
{
text:'redux',
isDone:false
}]
const reducertodo=(state=tab,action)=>{
    switch(action.type){

case 'ADD_TODO':
    return [...state,{text:action.newtext}]
 case 'REMOVE_TODO':
     return(
         state.filter((el,index)=>index!==action.cin)
     )
  case 'TOGGLE_TODO':
     return(state.map((el,index)=>(index==action.cin)?
     {text:el.text,isDone:!el.isDone}
     :el))   
        default:
            return state
    }

}
export default reducertodo