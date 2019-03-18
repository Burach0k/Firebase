import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './DropPost.scss';
import { action } from '../../redux/action';
import { bindActionCreators } from 'redux';
let i = 3;

class DropPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.action);
  }

  render() {
    return (
      <div className='drop-post'>
        <input id='drop-contein' type='text' placeholder='Введите url или текст' />
        <input id='isUrl' type='checkbox' />
        <p>Выберите, если указываете url</p>
        <button
          className='drop-button'
          onClick={() => {
            this.props.action({
              id: i++,
              name: 'I love tyan',
              iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg',
              contain: document.getElementById('drop-contein').value,
              isUrl: document.getElementById('isUrl').checked,
              info: { like: 10, repost: 0, view: 1 },
            });
          }}>
          {'Добавить пост'}
        </button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    items: store.item,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ action: action }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DropPost);
