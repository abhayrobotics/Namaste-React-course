import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
            count: 0,
            count2: 2,
        }
        console.log("child constructor")

    }
    componentDidMount(){
        console.log(" child omponent did mount")
    }

    render() {
        //? props can be destructured as well
        const { location } = this.props
       console.log("child render")
        // console.log(this.props)
        return (
            <div className="user-card">
                <h3>Class Based components</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                    
                        count:this.state.count+1
                    })
                }} >Increment Count</button>
                {/* <h3>Count2: {this.state.count2}</h3> */}
                <h3>Name: {this.props.name}</h3>
                <h3>Location: {location}</h3>
                <h3>Github: abhayrobotics</h3>
            </div>
        )

    }

}
export default UserClass;