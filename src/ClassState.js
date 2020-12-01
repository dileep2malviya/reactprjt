import React from 'react'

class Stunt extends React.Component{
    state = {
        name : "dileep",
        company : "THink tanker"
    }
    render() {
        return(
            <div>
                <h1> my name is {this.state.name}</h1>
            </div>
        )
    }
}
export default Stunt;