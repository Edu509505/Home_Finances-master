import User from "../models/User.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "12345678912345";

async function authenticate(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Você não está autenticado");
  }

  try {
    const token = jwt.verify(req.headers.authorization, SECRET_KEY);
    const user = await User.findByPk(token.id);
    req.user = user;
    next();
  } catch (error) {
    console.log("error", error);
    return res.status(401).send("Token Inválido");
  }
}

export default authenticate;
