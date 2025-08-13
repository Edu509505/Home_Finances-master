import User from "../models/User.js";
import jwt from "jsonwebtoken";

const SECRET_KEY = "12345678912345";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).send("Usuário não encontrado");
  }

  if (user.password !== password) {
    return res.status(401).send("Senha incorreta");
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY);

  res.json({
    token,
    usuario: { id: user.id, nome: user.nome, email: user.email },
  });
};

export default { login };
