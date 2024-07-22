const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')
const blogController = require('../controllers/employee')
const { checkUserSession } = require('../middlewares')

/**
 * @swagger
 *  /user/login:
 *      post:
 *          summary: logs in user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          username:
 *                              type: string
 *                          password:
 *                              type: string
 *          responses:
 *              '301':
 *                  description: logged in
 */

/**
 * @swagger
 *  /users/register:
 *      post:
 *          summary: Registers new user
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          username:
 *                              type: string
 *                          password:
 *                              type: string
 *          responses:
 *              '302':
 *                  description: registers new user
*/

router.post('/login', [checkUserSession], userController.postLoginUser)

router.post('/register', [checkUserSession], userController.saveUser)

module.exports = router;
