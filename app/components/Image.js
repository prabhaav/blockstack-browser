import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    fallbackSrc: PropTypes.string.isRequired,
    style: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      src: this.props.src
    }

    this.onError = this.onError.bind(this)
  }

  onError(event) {
    console.log('error with image for id: ' + this.props.id)
    this.setState({
      src: 'https://s3.amazonaws.com/65m/avatar-placeholder.png'
    })
  }

  render() {
    return (
      <img src={this.state.src}
        style={this.props.style}
        className={this.props.className}
        onError={this.onError} />
    )
  }
}

export default Image