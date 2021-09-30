const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

const {
  SECRET_KEY
} = require("../constants");