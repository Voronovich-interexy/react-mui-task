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

// function App({ numbers }: Iprops) {
//   console.log(numbers);
//   return (
//     <ul>
//       {numbers.map((obj) => (
//         <li className={obj.cl} key={obj.num}>
//           Num: {obj.num}, class: {obj.cl}
//         </li>
//       ))}
//     </ul>
//   );
// }

class ClassComponent2 extends Component<any, any> {
  constructor(props: Iprops) {
    super(props);
    this.state = { numbers: props.numbers };
  }

  componentDidMount() {
    const numbers = [...this.state.numbers, { num: 6, cl: 'cl6' }];
    setTimeout(() => {
      this.setState({ ...this.state, numbers });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>Class Component 2</h1>
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
          to="/"
        >
          Go back
        </NavLink>
      </div>
    );
  }
}

export default ClassComponent2;
