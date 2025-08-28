const User = require('../models/users.model.js');

const createUser = async (req, res) => {
  try {
    const request = req.body;
    const newUser = await User.create(request);

    res.status(201).json({
      message: "User created successfully!",
      user: newUser
    });
  } catch (err) {
    console.error("❌ Error creating user:", err);
    res.status(500).json({ message: "Something went wrong." });
  }
};

const userController = {
  createUser,
};

module.exports = userController;
