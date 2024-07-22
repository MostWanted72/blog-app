const express = require('express')
const router = express.Router();

const employeeController = require('../controllers/employee')
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


router.post('/store', [checkUserSession],  employeeController.storeEmployee)

router.get('/new', [checkUserSession], employeeController.newEmployee)

router.get('/:id', employeeController.getEmployeeById)

module.exports = router;
