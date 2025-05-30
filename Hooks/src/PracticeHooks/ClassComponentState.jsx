import React,{Component} from 'react'

class ClassComponentState extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
    }

    increment = () =>{
        this.setState({count: this.state.count + 1 });
    }
    
    render(){
        return(
            <div>
                <h2> Count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}
export default ClassComponentState;