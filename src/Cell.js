import React, { Component } from 'react';

class Cell extends Component {

    onColorClick = () => {
        this.setState({
            color: '#333'
        })
    }
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }
    render() {
        return (
            <div className='cell' onClick={this.onColorClick} style={{backgroundColor: this.state.color}}>
                
            </div>
        );
    }
}

export default Cell;
