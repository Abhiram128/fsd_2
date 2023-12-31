const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "7d" });
};

// login user
const loginUser = async (req, res) => {
  console.log("entered")
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// signup user
const signupUser = async (req, res) => {
  console.log('ewj')
  const { email, password, fullName, phoneNumber, batchYear, department, rollNumber } = req.body;

  try {
    console.log(req.body)
    const user = await User.signup(email, password, fullName, phoneNumber, batchYear, department, rollNumber);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser };
