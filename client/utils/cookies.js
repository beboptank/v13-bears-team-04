export const getCookieOptions = () => ({
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
  sameSite: "strict",
  expires: 1 * 24 * 60 * 60, // 1 day
});
