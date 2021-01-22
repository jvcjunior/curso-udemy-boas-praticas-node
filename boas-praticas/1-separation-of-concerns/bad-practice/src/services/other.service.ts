import authService from "./auth.service"

const needAuthorize = ({ email, password }: { email: String, password: String }) => {

  // request dependency
  const authorizeResult = authService.authorize({
    //@ts-ignore
    email: '', 
    password: ''
  })

  // do stuff

  return {
    sucess: true,
    data: {
      ...authorizeResult
    }
  }
}

export default {
  needAuthorize
}