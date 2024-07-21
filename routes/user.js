const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')
const blogController = require('../controllers/blog')
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


/**
 * @swagger
 *  /posts/new:
 *      get:
 *          summary: shows form for creating new blog
 *          responses:
 *              '200':
 *                  description: shows form for creating new blog
 *                  content:
 *                      text/html:
*/

/**
 * @swagger
 *  /posts/{id}:
 *      get:
 *          summary: shows a single blog
 *          parameters:
 *              - blog: id
 *          responses:
 *              '200':
 *                  description: shows a single blog
 *                  content:
 *                      text/html:
*/
router.post('/user/login', [checkUserSession], userController.postLoginUser)

router.post('/users/register', [checkUserSession], userController.saveUser)

router.post('/posts/store', [checkUserSession],  blogController.storeBlog)

router.get('/posts/new', [checkUserSession], blogController.newBlog)

router.get('/post/:id', blogController.getBlogById)

module.exports = router;
