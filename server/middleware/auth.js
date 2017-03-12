export function auth(req, res, next) {
  let { signedCookies: { sessionToken } } = req;
  if (sessionToken) {
    next();
  } else {
    res.redirect('/login');
  }
}