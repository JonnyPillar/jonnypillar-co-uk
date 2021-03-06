import React from 'react';
import LazyLoad from 'react-lazyload';

class Image extends React.Component {
  static defaultProps = {
    height: 210,
    offset: 50
  }

  render() {
    const imageUrl = this.props.item.fields.file.url + '?h=' + this.props.height;

    return (
      <LazyLoad height={this.props.height} offset={this.props.offset}>
        <img
          src={imageUrl}
          alt={this.props.item.fields.description}
          style={{
            display: 'block',
            maxWidth:'100%',
            maxHeight: this.props.height,
            height: 'auto'
          }}
        />
      </LazyLoad>
    );
  }
}

export default Image;
