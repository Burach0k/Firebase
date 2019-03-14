import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Public from '../../views/Public/Public';
import Config from '../../views/Config/Config';
import News from '../../views/News/News';
import Status from '../../views/Status/Status';
import './Post.scss'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let stena = this.props.items.map((val, index) => {
     return <div key ={index}  className={'post'}>
        <Public name={val.name} iconUrl={val.iconUrl} />
        <Config />
        <News contain={val.contain} isUrl={val.isUrl} />
        <Status info={val.info} />
      </div>;
    });
    return stena;
  }
}

// BeginnerControl.propTypes = {
//   name: PropTypes.string.isRequired,
// };

const mapStateToProps = store => {
  console.log(store,'post')
  return {
    items: store.item,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
