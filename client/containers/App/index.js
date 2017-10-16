import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as Actions from '../../actions/actions'

function App(ChildComponent, filter) {
  class BaseComponent extends React.Component {
    render() {
      return (
        <div id={filter}>
          <ChildComponent {...this.props}/>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    const obj = {}
    obj[filter] = state[filter];
    obj.errors = state.errors;
    return obj;

  }

  function mapDispatchToProps(dispatch) {
    if (Actions.hasOwnProperty(filter)) {
      return {
        actions: bindActionCreators(Actions[filter], dispatch),
        errorsAction: bindActionCreators(Actions.errors, dispatch)
      }
    } else {
      return {actions: null}
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(BaseComponent);

}
export default App;
