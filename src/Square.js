import React from 'react';

export class Square extends React.Component{
    render(){
        const color_ = this.props.color;
        return (
            <td className='td_square'
                onClick={this.props.handleClick} >
                <div
                    style={{color:color_,
                        backgroundColor: color_,
                        borderRadius: "50%",
                        borderColor: color_,
                        height:25}} >
                </div>
            </td>
        )
    }
}
export default Square;