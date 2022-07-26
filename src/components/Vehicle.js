import React from "react";

export class Vehicle extends React.Component{
    render(){
        return(
            <div className="cardContainer">
                <div className="cardContainer__header">
                   <span>{this.props.brand}</span>
                   <span>{this.props.model}</span>
                </div>

                <div className="cardContainer__footer">
                    <div>
                        <span>{this.props.engine.supply}</span>
                        <span>{this.props.engine.hp}</span>
                    </div>
                        <span>{this.props.year}</span>
                </div>
            </div>
        )
    }
}