import { generateToken } from "./jwt.js";

export const createJwtToken = async (req, res) => {
  // after validating user credentials
  const userPayload = { email: req.body.email };
  // console.log(userPayload, "issueJwt.js", 6);
  const token = generateToken(userPayload);
  // console.log(token, "token: issueJwt.js", 7);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // must be true because Vercel uses HTTPS
    sameSite: "none", // cross-site cookie required for localhost frontend
    partitioned: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ message: "token issued successfully" });
};
