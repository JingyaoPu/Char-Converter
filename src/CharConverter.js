import React from 'react'

const scaleNames = {
    Chars: 'Characters',
    Ints: 'Ints'
  };
  
  function toChar(ints) {
    var intList = ints.trim().split(' ');
    var charsString = '';
    for (var i of intList){
        if ((i>='a'.charCodeAt(0) & i<='z'.charCodeAt(0)) ||  i>='A'.charCodeAt(0) & i<='Z'.charCodeAt(0))
            charsString += String.fromCharCode(i);
    }
    return charsString;
  }
  
  function toInt(chars) {
    var intsString = '';
    var ascii= chars.trim().split('').map(function(itm){
        if ((itm>='a' & itm<='z') ||  itm>='A' & itm<='Z')
            return itm.charCodeAt(0);
        return null;
    });
    for (var c of ascii){ 
        if (c)
            intsString += c+' ';
    }
    return intsString;
  }
  
  function tryConvert(value, convert) {
    return convert(value);
  }
  
  
  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onValueChange(e.target.value);
    }
  
    render() {
      const value = this.props.value;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>{scaleNames[scale]}:</legend>
          <input value={value}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCharChange = this.handleCharChange.bind(this);
      this.handleIntChange = this.handleIntChange.bind(this);
      this.state = {value: '', scale: 'c'};
    }
  
    handleCharChange(value) {
      this.setState({scale: 'c', value});
    }
  
    handleIntChange(value) {
      this.setState({scale: 'i', value});
    }
  
    render() {
      const scale = this.state.scale;
      const value = this.state.value;
      const ints = scale === 'c' ? tryConvert(value, toInt) : value;
      const chars = scale === 'i' ? tryConvert(value, toChar) : value;
  
      return (
        <div>
          <TemperatureInput
            scale="Chars"
            value={chars}
            onValueChange={this.handleCharChange} />
          <TemperatureInput
            scale="Ints"
            value={ints}
            onValueChange={this.handleIntChange} />
        </div>
      );
    }
  }
  
  
  export default Calculator