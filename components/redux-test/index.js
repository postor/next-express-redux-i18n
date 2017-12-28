import { connect } from 'react-redux'
import { incr, decr } from '../redux/value'

const ReduxTest = ({ value, dispatch }) => (<div>
  <h1>{value}</h1>
  <p>
    <button onClick={() => dispatch(incr())}>+(sync)</button>
    <button onClick={() => dispatch(decr())}>-(delay by 1 second)</button>
  </p>
</div>)

export default connect(state => state)(ReduxTest)