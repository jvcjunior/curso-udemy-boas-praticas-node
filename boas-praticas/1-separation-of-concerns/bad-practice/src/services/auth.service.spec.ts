import authService from './auth.service';
import httpMocks from 'node-mocks-http';

describe('Authorization Service', () => {
  test('should return user data when authorize with sucess', () => {
    const req = httpMocks.createRequest({
      method: 'POST',
      url: '/auth',
      body: {
        email: 'email', password: 'password' 
      }
    });
    
    const result = authService.authorize(req);
    expect(result.sucess).toBe(true);
  });
})