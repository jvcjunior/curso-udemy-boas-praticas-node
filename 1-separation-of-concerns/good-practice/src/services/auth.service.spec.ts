import authService from './auth.service';

// no more this dependency
// import httpMocks from 'node-mocks-http';

describe('Authorization Service', () => {
  test('should return user data when authorize with sucess', () => {
    // const req = httpMocks.createRequest({
    //   method: 'POST',
    //   url: '/auth',
    //   body: {
    //     email: 'email', password: 'password' 
    //   }
    // });
    const authBody = {
      email: 'email@email.com',
      password: 'password'
    }
    const result = authService.authorize(authBody);
    expect(result.sucess).toBe(true);
  });
})