import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) return <Redirect to="/login" />
  return <Redirect {...props} />
}

export default ProtectedRoute
