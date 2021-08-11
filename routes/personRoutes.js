const express = require('express');
const router = express.Router();
const { getPersons,getPerson,createPerson,updatePerson,deletePerson } = require('../controllers/personControllers');

/**
* @swagger
* components:
*   schemas:
*     Person:
*       type: object
*       required:
*         - title
*         - author
*       properties:
*       
*          name:
*            type: String,
*            description: The person name
*
*          age:
*            type: Number,
*            description: The person age
*
*          cgpa:
*            type: Number,
*            description: The person cgpa
*        
*       example:
*          
*             name: typehere
*
*             age: typehere
*
*             cgpa: typehere
*          
*/

/**
* @swagger
  * tags:
  *   name: Persons
  *   description: The persons API
*/


/**
 * @swagger
 * /persons:
 *   get:
 *     summary: Returns the list of all the persons
 *     tags: [Persons]
 *     responses:
 *       200:
 *         description: The list of the persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get('/',getPersons);


/**
 * @swagger
 * /persons:
 *   post:
 *     summary: Create a new person
 *     tags: [Persons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persons'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persons'
 *       500:
 *         description: Some server error
 */
router.post('/',createPerson);



/**
 * @swagger
 * /persons/{id}:
 *   get:
 *     summary: Get the person by id
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The person id
 *     responses:
 *       200:
 *         description: The person description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: The person was not found
 */
router.get('/:id',getPerson);


/**
 * @swagger
 * /persons/{id}:
 *  put:
 *    summary: Update the person by the id
 *    tags: [Persons]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The person id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Person'
 *    responses:
 *      200:
 *        description: The person was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Person'
 *      404:
 *        description: The person was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id',updatePerson);



/**
 * @swagger
 * /persons/{id}:
 *   delete:
 *     summary: Remove the person by id
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The person id
 * 
 *     responses:
 *       200:
 *         description: The person was deleted
 *       404:
 *         description: The person was not found
 */
router.delete('/:id',deletePerson);

module.exports = router
