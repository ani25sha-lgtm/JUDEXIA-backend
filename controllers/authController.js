const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const dummyUser = {
      id: Math.random().toString(36).substr(2, 9),
      email: email,
      xp: 0,
      rank: 'Beginner',
      createdAt: new Date()
    };

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: dummyUser
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error during signup',
      error: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const token = jwt.sign(
      { id: 'dummy-user-id', email },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token: token,
      user: {
        id: 'dummy-user-id',
        email: email,
        xp: 150,
        rank: 'Intermediate'
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
};
