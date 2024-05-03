const express = require('express');
const router = express.Router();
const { getTeachers,getTeacher,createTeacher,updateTeacher,deleteTeacher } = require('../controllers/teacherControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       required:
 *         - name
 *         - age
 *       properties:
 *         name:
 *           type: string
 *           description: This is teacher name
 *         age:
 *           type: number
 *           description: The teacher age
 *         certificate:
 *           type: string
 *           description: The teacher certificate list by comma
 *         address:
 *           type: string
 *           description: The teacher address
 *       example:
 *         name: Mr. John
 *         age: 29
 *         certificate: AWS, NodeJS, Azure
 *         address: Mohakhali 4, Dhaka-1212
 */

 /**
  * @swagger
  * tags:
  *   name: Teachers
  *   description: The teachers API
  */


/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Returns the list of all the teachers
 *     tags: [Teachers]
 *     responses:
 *       200:
 *         description: The list of the teachers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 */
router.get('/',getTeachers);


/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Create a new teacher
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       500:
 *         description: Some server error
 */
router.post('/',createTeacher);



/**
 * @swagger
 * /teachers/{id}:
 *   get:
 *     summary: Get the teacher by id
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 *     responses:
 *       200:
 *         description: The teacher description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: The teacher was not found
 */
router.get('/:id',getTeacher);


/**
 * @swagger
 * /teachers/{id}:
 *  put:
 *    summary: Update the teacher by the id
 *    tags: [Teachers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The teacher id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Teacher'
 *    responses:
 *      200:
 *        description: The teacher was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Teacher'
 *      404:
 *        description: The teacher was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id',updateTeacher);



/**
 * @swagger
 * /teachers/{id}:
 *   delete:
 *     summary: Remove the teacher by id
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 * 
 *     responses:
 *       200:
 *         description: The teacher was deleted
 *       404:
 *         description: The teacher was not found
 */
router.delete('/:id',deleteTeacher);

module.exports = router
