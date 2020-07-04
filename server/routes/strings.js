/** API routes for posting strings to the array fakeDb and viewing all strings. */

const express = require('express');
const StringModel = require('../models/StringModel');
const { STATUS_CODE_CREATED } = require('../config');

const router = new express.Router();

/** GET /   get all strings
 *
 * Returns: { strings:
 *             [ "example string 1",
 *               "example string 2"
 *                              ...]
 *          }
 */

router.get('/', async function getAllItems(req, res, next) {
  try {
    const strings = await StringModel.getAll();
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

/** POST /  add a new string
 *
 * Returns: { string: "example string 1" }
 */

router.post('/', async function createItem(req, res, next) {
  try {
    const string = await StringModel.create(req.body.string);
    return res.status(STATUS_CODE_CREATED).json({ string });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
