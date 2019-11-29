exports.getCookieOptions = () => ({
  secure: process.env.COOKIE_SECURE,
  httpOnly: process.env.COOKIE_HTTP_ONLY,
  expires: new Date(Date.now() + 86400000),
  domain: process.env.COOKIE_DOMAIN,
  sameSite: process.env.COOKIE_SAME_SITE
});
