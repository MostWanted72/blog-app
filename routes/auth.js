const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')
const { checkUserSession } = require('../middlewares')

/**
 * @swagger
 * components:
 *  schemas:
*      User:
*          type: Object
*          required:
*              - username
*              - password
*          properties:
*              username:
*                  type: string
*                  description: The username of the user
*              password:
*                  type: string
*                  description: The password of the user
*          example:
*              username: User Name
*              passwrod: Password
 */

/**
 * @swagger
 *  /auth/register:
 *      get:
 *          summary: shows registration page
 *          responses:
 *              '200':
 *                  description: shows registration page
*/

/**
 * @swagger
 *  /auth/login:
 *      get:
 *          summary: shows login page
 *          responses:
 *              '200':
 *                  description: login new user
 *                  content:
 *                      text/html:
*/

/**
 * @swagger
 *  /auth/logout:
 *      get:
 *          summary: logs out user
 *          responses:
 *              '302':
 *                  description: logs out user
 *                  content:
 *                      text/html
*/

router.get('/register', [checkUserSession], userController.registerUser)

router.get('/login', [checkUserSession], userController.loginUser)

router.get('/logout', userController.logout)

module.exports = router;
