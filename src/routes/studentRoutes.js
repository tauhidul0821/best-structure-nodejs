const express = require('express');
const router = express.Router();
const { getStudents,getStudent,createStudent,updateStudent,deleteStudent } = require('../controllers/studentControllers');

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - group
 *         - registration
 *         - dateOfBarth
 *       properties:
 *         name:
 *           type: string
 *           description: This is student name
 *         fatherName:
 *           type: string
 *           description: This is student father name
 *         motherName:
 *           type: string
 *           description: This is student mother name
 *         group:
 *           type: string
 *           description: The student group
 *         registration:
 *           type: string
 *           description: The student registration number
 *         dateOfBarth:
 *           type: string
 *           description: The student date of barth
 *         address:
 *           type: string
 *           description: The student address
 *       example:
 *         name: Mr. John
 *         fatherName: Mr. father Khan
 *         motherName: Mst. mother Khatun
 *         group: science
 *         registration: 23445646
 *         dateOfBarth: 12/12/1994
 *         address: Mohakhali 4, Dhaka-1212
 */

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students API
 */


/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns the list of all the students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: The list of the students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 */
router.get('/',getStudents);


/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The student was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */
router.post('/',createStudent);



/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get the student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The teacher id
 *     responses:
 *       200:
 *         description: The student description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The student was not found
 */
router.get('/:id',getStudent);


/**
 * @swagger
 * /students/{id}:
 *  put:
 *    summary: Update the teacher by the id
 *    tags: [Students]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The student id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Student'
 *    responses:
 *      200:
 *        description: The teacher was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Student'
 *      404:
 *        description: The student was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id',updateStudent);



/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Remove the student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *
 *     responses:
 *       200:
 *         description: The student was deleted
 *       404:
 *         description: The student was not found
 */
router.delete('/:id',deleteStudent);

module.exports = router
