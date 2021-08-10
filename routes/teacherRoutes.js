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
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the teacher
 *         title:
 *           type: string
 *           description: The teacher title
 *         author:
 *           type: string
 *           description: The teacher author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
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
 *             $ref: '#/components/schemas/Teachers'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teachers'
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
