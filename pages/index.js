
import Router from 'next/router'
import { connect } from 'react-redux'
import { add } from '../store/store'
import store from "../store/store"



// const events = [
//     'routeChangeStart',
//     'routeChangeComplete',
//     'routeChangeError',
//     'beforeHistoryChange',
//     'hashChangeStart',
//     'hashChangeComplete'
// ]

// function makeEvent(type) {
//     return (...args) => {
//         console.log(type, ...args)
//     }
// }

// events.forEach(event => {
//     Router.events.on(event, makeEvent(event))
// })




const Index = ({ counter, username, rename, add }) => {
    return (
      <>
        <span>Count: {counter}</span>
        <a>username: {username}</a>
        <input value={username} onChange={(e) => rename(e.target.value)} />
        <button onClick={() => add(counter)}>do add</button>
      </>
    )
}

Index.getInitialProps = async ({ reduxStore }) => {
  reduxStore.dispatch(add(3))
  return {}
}

export default connect(function mapStateToProps(state) {
  return {
    counter: state.counter.count,
    username: state.user.username
  }
}, function mapDispatchToProps(dispatch) {
  return {
    add: (num) => dispatch({ type: 'ADD', num }),
    rename: (name) => dispatch({ type: 'UPDATE_USERNAME', name })
  }
})(Index)