/** API routes for posting and viewing items (strings) to the array fakeDb. */

const express = require('express');
const Item = require('../models/Item');
const { STATUS_CODE_CREATED } = require('../config');

const router = new express.Router();

/** GET /   get all strings
 *
 * Returns: { items:
 *             [ "example string 1",
 *               "example string 2"
 *                              ...]
 *          }
 */

router.get('/', async function getAllItems(req, res, next) {
  try {
    const items = await Item.getAll();
    return res.json({ items });
  } catch (err) {
    return next(err);
  }
});

/** POST /  add a new string
 *
 * Returns: { item: "example string 1" }
 */

router.post('/', async function createItem(req, res, next) {
  try {
    const item = await Item.create(req.body.item);
    return res.status(STATUS_CODE_CREATED).json({ item });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
