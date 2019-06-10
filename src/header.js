import React, { Component } from 'react';
import {connect} from 'react-redux'
class Header extends Component {
    constructor(props)
    {
        super(props)
        this.state=({
            value:""
        })
    }

    handlechange=(event)=>
    {
        this.setState({
            value:event.target.value
        })
    }
    add=()=>{
        if(this.state.value.trim()=='')
        return{}
        else{
              this.props.addtodo(this.state.value)
              this.setState({value:''})
        }
      
    }
   
    render() { 
        return ( 
            <div className='header-app'>
             <input type='text' value={this.state.value} onChange={this.handlechange}/>
             <button onClick={this.add} >Add+</button>
            </div>
         );
    }
}
 const mapDispatchToProps=(dispatch)=>{
     return{
         addtodo:newtext=>{
             dispatch({
                 type:'ADD_TODO',
                 newtext
             })
         }

     }
 }
export default connect (null,mapDispatchToProps)(Header);