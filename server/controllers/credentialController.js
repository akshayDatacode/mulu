"use strict"
const jwt = require("jsonwebtoken")

const HttpResponse = require("../models/http-response")
const Credentials = require("../models/credentialsModel")

// LOGIN FUNCTION
const login = async (req, res) => {
  const { userId, password } = req.body

  //trying to find if user email exists.
  let existingUser

  try {
    existingUser = await Credentials.findOne({ userId: userId })
  } catch (err) {
    const error = new HttpResponse(
      "Something went wrong while checking user email",
      500
    )
    return res.status(500).json({ response: error })
  }
  if (!existingUser) {
    const error = new HttpResponse(
      "Invalid credentials, could not log you in.",
      401
    )
    return res.status(500).json({ response: error })
  }
  let isValidPassword
  try {
    isValidPassword = await Credentials.findOne({ password: password })
  } catch (err) {
    const error = new HttpResponse(
      "Something went wrong while comparing passwords",
      500
    )
    return res.status(500).json({ response: error })
  }

  if (!isValidPassword) {
    const error = new HttpResponse("Wrong password entered", 401)
    return res.status(401).json({ response: error })
  }

  //generating JWT TOKEN- DO NOT TOUCH
  let token
  try {
    token = jwt.sign({ userId: userId }, "key", {
      expiresIn: "1h",
    })
  } catch (err) {
    const error = new HttpResponse(
      "Token generation failed, Login not done",
      500
    )
    return res.status(500).json({ response: error })
  }
  res.json({
    userId: userId,
    token: token,
  })
}

exports.login = login