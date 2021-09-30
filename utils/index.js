const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const {
  SECRET_KEY
} = require("../constants");

exports.createToken = (userData) => {
  return jwt.sign({
    ...userData
  }, SECRET_KEY, {
    expiresIn: '10h'
  });
}

exports.validateToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return {};
  }
}