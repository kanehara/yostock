import chai from 'chai';
import auth from '../auth';
import sinon from 'sinon';
const assert = chai.assert;

describe('auth middleware tests', () => {
  const redirect = sinon.spy();
  const mockRes = { redirect };
  const mockNext = sinon.spy();

  it('- Does not authorize /login', () => {
    const mockReq = {
      originalUrl: '/login'
    };
    auth(mockReq, mockRes, mockNext);
    assert(mockNext.calledOnce);
    assert(!redirect.called);
  });

  it('- Redirects to /login if request does not have session cookie', () => {
    const mockReq = {
      originalUrl: '/home',
      signedCookies: {}
    };
    auth(mockReq, mockRes, mockNext);
    assert(redirect.calledOnce);
    assert(redirect.calledWith('/login'));
  })

  it('+ Proceeds if request has session cookie', () => {
    const mockReq = {
      originalUrl: '/home',
      signedCookies: { sessionToken: 'test cookie' }
    };
    auth(mockReq, mockRes, mockNext);
    assert(mockNext.calledOnce);
    assert(!redirect.called);
  })
})