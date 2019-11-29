exports.getCookieOptions = () => ({
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
  expires: new Date(Date.now() + 86400000),
  domain: process.env.DOMAIN_COOKIE,
  sameSite: "None"
});
