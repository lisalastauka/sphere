import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import inViewport from 'in-viewport';
import cn from 'classnames';



class Appear extends Component {
  constructor(){
    super();
    this.animate = this.animate.bind(this);
  }

  state = {
    inViewport: false,
  }

  setVisible = () => {
    this.setState({
      inViewport: true
    })
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    // watch for viewport entry

    const el = ReactDOM.findDOMNode(this);
    const options = {
        rootMargin: '1000px',
        threshold: 1.0
    }
    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = el.querySelectorAll("img")[0];

            if(img){
              img.onload = () => {
                this.watcher = inViewport(el, this.setVisible);
              };
              if(img.complete){
                this.watcher = inViewport(el, this.setVisible);
              }
            } else {
              this.watcher = inViewport(el, this.setVisible);
            }
          }
        })
      }, options);
        observer.observe(el);
    } else if (el) {

      // NOTE: check on IE
      const img = el.querySelectorAll("img")[0];
      if(img){
        console.log(img);
        img.onload = () => {
          console.log("loaded");
          this.watcher = inViewport(el, this.setVisible);
        };
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
    const className = cn(this.props.className, this.state.inViewport && `${this.props.className}--inViewport`);
    const desktop =  window.innerWidth >= 1280;
    const tablet =  window.innerWidth >= 768;
    return <div className={desktop ? className : ''}>{ this.props.children }</div>;
  }
}

export default Appear;
