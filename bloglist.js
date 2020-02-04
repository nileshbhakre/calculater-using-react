import React, { Component } from 'react'

export default class Bloglist extends Component {
    constructor(props){
      super(props);

     this.blogtask=this.blogtask.bind(this)

    }
 
    blogtask(item){
     
        return(
            <div className="blogarray" key={item.key}>
              <button type="button" onClick={function(){return(this.delete(item.key))}} className="button">delete</button>
              <h3>{item.title}</h3>
              <h5>{item.date}</h5> 
              <br/>
              <p>{item.content}</p> 
            </div>
        )

    }

    delete(key){

       this.props.delete(key)
    } 
   
        


    render() {
        
        const item =this.props.entries;
        const itemarray= item.map(this.blogtask)

        return (
            <div className="displayblog">
              {itemarray}   
            </div>
        )
    }
}

