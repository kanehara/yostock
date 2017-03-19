export default function auth(req, res, next) {
  console.info('auth called');
  if (req.originalUrl === '/login') {
    next();
    return;
  }

  let { signedCookies: { sessionToken } } = req;
  if (sessionToken) {
    next();
  } else {
    res.redirect('/login');
  }
}