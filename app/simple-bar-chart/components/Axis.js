import React, {Component} from 'react';

import {AXIS_STYLES, VALUE_STYLES} from '../styles/axisStyle';

export default class Axis extends Component {

  getAxis() {
    const {xAxisAmount, width, axisColor} = this.props;
    const sum = this.sumDataValues();
    const axisInterval = parseInt(sum / xAxisAmount);
    let axis = [];
    for (let x = 1; x <= xAxisAmount; x += 1) {
      axis.push({
        value: axisInterval * x,
        styles: {
          ...AXIS_STYLES,
          bottom: `${parseInt(axisInterval * x * 100 / sum)}%`,
          width: width,
          background: axisColor
        }
      });
    }
    return axisInterval > 0 ? axis : [];
  }
  sumDataValues() {
    return this.props.data.reduce((sum, item) => sum += item.value, 0);
  }

  render() {
    const {axisValueColor} = this.props;
    const axis = this.getAxis();
    const valueStyles = {
      ...VALUE_STYLES,
      color: axisValueColor
    };
    return (
            <div>
                {axis.map((axis, index) => (
                                    <div className="sbc-bar-axis" 
                                         style={axis.styles} 
                                         key={index}>
                                        <span style={valueStyles}>{axis.value}</span>
                                    </div>)
                          )}
            </div>
            );
  }
}