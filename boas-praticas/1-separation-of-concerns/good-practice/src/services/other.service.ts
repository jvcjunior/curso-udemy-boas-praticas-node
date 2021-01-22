import authService from "./auth.service"

const needAuthorize = ({ email, password }: { email: String, password: String }) => {

  const authorizeResult = authService.authorize({ email, password });

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