import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import inViewport from 'in-viewport';
import cx from 'classnames';

class Appear extends Component {
  state = {
    inViewport: false
  }

  setVisible = () => {
    document.addEventListener('loadend',
      this.setState({
        inViewport: true
      })
    );

    // setTimeout(
    //   this.setState({
    //     inViewport: true
    //   }), 3000
    // )
    // ;
  }

  componentDidMount() {
    // watch for viewport entry
    const trigger = document.getElementById(this.props.trigger);

    const el = ReactDOM.findDOMNode(this);
    if (trigger) {
      this.watcher = inViewport(trigger, this.setVisible);
      return;
    }
    if (el) {
      if (el.children ) {
        el.addEventListener('loadend',
          this.watcher = inViewport(el, this.setVisible)
        );
      } else {
        this.watcher = inViewport(el, this.setVisible);
      }
    } else {
      // fallback to visible
      this.setVisible();
    }
  }

  componentWillUnmount() {
    if (this.watcher) {
      this.watcher.dispose();
    }
  }

  render() {
    const className = cx(this.props.className, this.state.inViewport && `${this.props.className}--inViewport`);
    const desktop =  document.body.getBoundingClientRect().width >= 1280;
    return <div className={desktop ? className : ''}>{ this.props.children }</div>;
  }
}

export default Appear;
