import React from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../../actions/auth'
import LoadingSpinner from '../LoadingSpinner'
import Login from './users/Login'

function withAuth(WrappedComponent) {
    class Wrapper extends React.Component {
        componentDidMount() {
            this.props.dispatchCheckAuth()
        }

        render() {
            if(!this.props.authChecked) {
                return <LoadingSpinner />
            } else if (!this.props.loggedIn) {
                return (
                    <div>
                        <Login />
                        <p className="errors">You need to login to view this page</p>
                    </div>
                )
            } else {
                return <WrappedComponent {...this.props} />
            }
        }
        const mapStateToProps = ({
            auth: { authChecked, loggedIn, currentUser }
        }) => {
            return { authChecked, loggedIn, currentUser }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                dispatchCheckAuth: () => dispatch(checkAuth())
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}

export default withAuth