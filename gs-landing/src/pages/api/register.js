const register = async (req, res) => {
  const SECRET_KEY = process.env.RECAPTCHA_SECRETKEY;
  const { name, title, contents, recaptchaResponse } = req.body;

  const varifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaResponse}`;

  try {
    const recaptchaRes = await fetch(varifyUrl, { method: "POST" });

    const recaptchaJson = await recaptchaRes.json();

    res.status(200).json({ name, title, contents, ...recaptchaJson });
  } catch (e) {
    res.status(400).json(e.error);
  }
};

export default register;
