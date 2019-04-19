import React, { Component } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Progress } from 'reactstrap';

class Stats extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-2 mr-3">
            <div>Brightness</div>
          </div>
          <div className="col">
            <Progress className="mb-5" color="info" value={this.props.info.brightness/500*100}>{this.props.info.brightness/500*100}%</Progress>
          </div>
        </div>
        <div className="row">
          <div className="col-2 mr-3">
            <div>Battery Charge</div>
          </div>
          <div className="col">
            <Progress className="mb-5" value={this.props.info.vdd/4000*100}>{this.props.info.vdd/4000*100}%</Progress>
          </div>
        </div>
        <div>History</div>
        <LineChart width={400} height={350} data={this.props.history} margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}>
          <XAxis dataKey="timestamp"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3"/>
          <Line type="monotone" dataKey="vdd" stroke="#007bff" activeDot={{ r: 2 }} />
          <Line type="monotone" dataKey="brightness" stroke="#17a2b8" />
                 <Tooltip /> <Legend />
        </LineChart>

      </div>
    )
  }
}

export default Stats;
