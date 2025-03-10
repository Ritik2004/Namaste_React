import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count:0,
            count2:2
        }
    }
    render(){
        const {count} = this.state;
        return (
            <div className="user-card">
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                 this.setState({
                    count:this.state.count+1
                 })
            }}>Count Increase</button>
                <h2>Name : {this.props.name}</h2>
                <h2>Location: Aligarh</h2>
                <h2>Contact: 123@gmail.com</h2>
            </div>
        )
    }
}

export default Userclass;