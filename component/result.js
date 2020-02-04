import React,{Component} from 'react'

export default class Result extends Component{


    render(){
     const {result}=this.props
        
        return(
         <div className="input">

         {result}
         </div>
         
        )

    }
}



