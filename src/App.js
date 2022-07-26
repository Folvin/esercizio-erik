import React from "react";
import { Vehicle } from "./components/Vehicle";
import { vehicles } from "./vehiclesData";


function normalizeArray(vehicles) {
    const normalized = [];
    vehicles.forEach((vehicle) => {
        if (Array.isArray(vehicle)) {
            normalized.push(...vehicle);
        } else {
            normalized.push(vehicle);
        }
    });
    return normalized;
}

export default class App extends React.Component {
    state = {
        vehicles: [],
    };
    componentDidMount() {
        this.setState({ vehicles: normalizeArray(vehicles) });
    }
    render() {
        return (
            <div className="container">
                {this.state.vehicles.map(vehicle =>(
                    <Vehicle brand={vehicle.brand}  model={vehicle.model} engine={vehicle.engine} year={vehicle.year} />
                ))}
            </div>);
    }
}
