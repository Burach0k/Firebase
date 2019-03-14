import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import './DropPost.scss';

class DropPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addPost = this.addPost.bind(this);
  }
  addPost() {
    this.props.setYear(4000)
  }

  render() {
    return (
      <div className = 'drop-post'>
        <input type = 'text' />

        <button className='drop-button' onClick={this.addPost} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch,'kkkkkk')
  return {
    setYear: year => dispatch(setYear(year)),
  }
}
// BeginnerControl.propTypes = {
//   name: PropTypes.string.isRequired,
// };

export default connect(
  mapDispatchToProps
)(DropPost)
