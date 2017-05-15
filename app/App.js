import {Component} from 'react';

import SimpleBarChart from './simple-bar-chart/SimpleBarChart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {value: 45, label: 'label 1'},
        {value: 1, label: 'label 2 label 2 label 2 label 2'},
        {value: 78, label: 'label 3'},
        {value: 23, label: 'label 4'},
        {value: 38, label: 'label 5'}
      ],
      orientation: 'vertical'
    }
  }
  generateRandomData() {
    this.setState({
      data: this.state.data.map(item => ({...item, value: Math.floor((Math.random() * 100) + 1)}))
    });
  }
  toggleOrientation() {
    const {orientation} = this.state;
    this.setState({
      orientation: orientation === 'vertical' ? 'horizontal' : 'vertical'
    });
  }
  render() {
    const description = 'Data as objects list([{value: 34, label: \'label 1\',....}])';
    const {data, orientation} = this.state;
    const style = {
      width: 500,
      margin: '100px auto'
    };
    return (
            <section style={style}>
                <article>
                    <button onClick={() => this.generateRandomData()}>Random data</button>
                    <button onClick={() => this.toggleOrientation()}>change orientation</button>
                </article>
                <article>
                    <h2>Data as list([1,2,34,...])</h2>
                    <SimpleBarChart width={300} 
                                    height={100}
                                    orientation={orientation}
                                    data={data.map(item => item.value)}/>
                </article>
                <article>
                    <h2>{description}</h2>
                    <SimpleBarChart width={300} 
                                    height={100}
                                    data={data}/>
                </article>
            </section>
            );
  }
}