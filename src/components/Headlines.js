import React from 'react';
import { connect } from 'react-redux'
import { makeApiCall } from '../actions'

class Headlines extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const { dispatch } = this.props
    // console.log("An API Call would have been made if it wasn't commented out")
    dispatch(makeApiCall());
  }
  render() {
    const { error, isLoading, headlines } = this.props;
    if (error) {
      return <>Error: {error.message}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
      return (
        <>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
              </li>
            )}
          </ul>
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Headlines);