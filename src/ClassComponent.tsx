import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

type propsType = {
  num: number;
  cl: string;
};

interface Iprops {
  numbers: Array<propsType>;
}

class ClassComponent extends Component<any, any> {
  constructor(props: Iprops) {
    super(props);
    this.state = { numbers: props.numbers, tId: null, count: 0 };
    this.incrementCallback = this.incrementCallback.bind(this);
  }

  componentDidMount() {
    const numbers = [...this.state.numbers, { num: 6, cl: 'cl6' }];
    const tId = setTimeout(() => {
      this.setState({ numbers });
    }, 7000);
    this.setState({ tId });
  }

  componentWillUnmount() {
    clearInterval(this.state.tId);
    console.log('unmounted 1');
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
    console.log('updated');
  }

  incrementCallback() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Class Component 1</h1>

        <ul>
          {this.state.numbers.map((obj: any) => (
            <li className={obj.cl} key={obj.num}>
              Num: {obj.num}, class: {obj.cl}
            </li>
          ))}
        </ul>
        <NavLink
          style={{ textDecoration: 'none', border: '1px blue solid', marginRight: 10 }}
          to="/next"
        >
          Go to next page
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', border: '1px blue solid', marginRight: 10 }}
          to="/name"
        >
          Go to name page
        </NavLink>
        <NavLink style={{ textDecoration: 'none', border: '1px blue solid' }} to="/api">
          Go API
        </NavLink>
        <button onClick={this.incrementCallback}>Click me {this.state.count}</button>
      </div>
    );
  }
}

export default ClassComponent;
