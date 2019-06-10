import React, { Component } from 'react';
import {connect} from 'react-redux'
import Itemlisttodo from './itemtodo';


var tab=[]    

class Listtodo extends Component {
    constructor(props)
    {
        super(props)
        this.state=(
            {
                newtab:tab
            }
        )
    }
    
    render() { 
    
        return ( 
            <div className='listtodo-app'>
             {
                 this.props.todo.map((el,index)=>
                <Itemlisttodo key={index}  itemtodo={el}
                id={index}  />
            )
             }
            </div>
         );
    }
}
const mapStateToProps=(state)=>{
    return{
        todo:state.reducertodo
    }
}
 
export default  connect(mapStateToProps)(Listtodo);