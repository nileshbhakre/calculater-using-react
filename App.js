//**************calculator standard******************//
import React ,{Component} from 'react'
import Keypad from './component/keypad'
import Result from './component/result'


export default class App extends Component{

    constructor(props){
      super(props);
      this.state={
       result:" ",

     }
      this.onclick=this.onclick.bind(this)
     
    }

    onclick=button=>{
     if(button==="="){
       this.calculate()
     }
     else if(button==="c"){
       this.reset()
     }
     else if(button==="CE"){
       this.backspace()    
     }
     else{
       this.setState({result:this.state.result + button})
     }

    }
    
     calculate(){
       var checkresult=""
       if(this.state.result.includes("--")){
            checkresult=this.state.result.replace('--','+')
       }
       else
       (checkresult=this.state.result)
      try{
        this.setState({result: eval(checkresult) })
      }catch(e){
        this.setState({result:"error"})
      }

     }

     reset(){
       this.setState({result:" "})
     }

     

    render(){

       return(
         <div className="calci">
         <Result result={this.state.result}/>
         <Keypad onclick ={this.onclick} />
         </div>
       )

    }

}
