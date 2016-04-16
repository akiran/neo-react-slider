import React from 'react'
import ReactDOM from 'react-dom'
import ReactComponent from '../../src'
import styles from '../scss/app.scss'

class Example extends React.Component {
  render() {
    return (
      <div>
        example!
        <ReactComponent />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
