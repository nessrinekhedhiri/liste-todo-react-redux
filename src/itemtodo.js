import React, { Component } from 'react';
import {connect} from 'react-redux'

function Itemlisttodo({itemtodo,id,removetodo,toggletodo})
{
    return (
        <div className='itemtodo-app'>
        <ul>
                 <li>
                     <span  onClick={()=>toggletodo(id)}
                     style={{textDecoration:itemtodo.isDone?"line-through":"none"}}>{itemtodo.text}</span>
                     <button style={{marginLeft:'5%'}} onClick={()=>removetodo(id)} >remove</button>
                 </li>
             </ul>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        removetodo:cin=>{
            dispatch({
                type:'REMOVE_TODO',
                cin //ES6 id:id
            })
        },
        toggletodo:cin=>{
            dispatch({
                type:'TOGGLE_TODO',
                cin //ES6 id:id
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Itemlisttodo)