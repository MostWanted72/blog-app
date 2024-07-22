const express = require('express')
const router = express.Router();

const employeeController = require('../controllers/employee')
const { checkUserSession } = require('../middlewares')

/**
 * @swagger
 * components:
 *  schemas:
*      Employee:
*          type: Object
*          required:
*              - name
*              - designation
*          properties:
*              name:
*                  type: string
*                  description: The name of the employee
*              designation:
*                  type: string
*                  description: The position of the employee
*          example:
*              name: Rohan
*              designation: SWE
 */

/**
 * @swagger
 *  /employee/new:
 *      get:
 *          summary: shows form for adding new employee
 *          responses:
 *              '200':
 *                  description: shows form for adding new employee
 *                  content:
 *                      text/html:
*/

/**
 * @swagger
 *  /employee/{id}:
 *      get:
 *          summary: shows detail of single employee
 *          parameters:
 *              - blog: id
 *          responses:
 *              '200':
 *                  description: shows detail of single employee
 *                  content:
 *                      text/html:
*/


router.post('/store', [checkUserSession],  employeeController.storeEmployee)

router.get('/new', [checkUserSession], employeeController.newEmployee)

router.get('/:id', employeeController.getEmployeeById)

module.exports = router;
