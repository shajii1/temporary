const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./model/User'); // Define the User model

const app = express();
const port = process.env.PORT || 9019;

mongoose.connect('mongodb+srv://manoharmns04:manoharmns04@cluster0.5icxotm.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'manoharmakarla',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(User.authenticate())
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Define API routes for registration, login, and logout

app.post('/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Check if any of the required fields are empty
    if (!username || !password || !role) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if the username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    const user = new User({ username, role });
    await User.register(user, password); // Using passport-local-mongoose for registration
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Registration failed.' });
  }
});



app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ error: 'An error occurred during authentication.' });
    }

    if (!user) {
      // If the user is null, it means the username does not exist
      return res.status(401).json({ error: 'Username not found' });
    }

    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return res.status(500).json({ error: 'An error occurred during login.' });
      }

      // Authentication succeeded, handle login logic here
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
});


app.get('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});