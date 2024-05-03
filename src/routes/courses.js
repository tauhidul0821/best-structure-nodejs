const express = require('express');
const router = express.Router({ mergeParams: true });
const { getCourses, getCourse, addCourse, updateCourse, deleteCourse } = require('../controllers/courses');
const { protect, authorize } = require('../../middleware/auth')
const {getPersons, getPerson} = require("../controllers/personControllers");


/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - weeks
 *         - tuition
 *         - minimumSkill
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the course
 *         title:
 *           type: string
 *           description: The course title
 *         description:
 *           type: string
 *           description: The course description
 *         weeks:
 *           type: string
 *           description: The course weeks
 *         tuition:
 *           type: string
 *           description: The course tuition fee
 *         minimumSkill:
 *           type: string
 *           description: The course minimum skill fee
 *       example:
 *         title: The New Turing Omnibus
 *         description: This is 3 month full course
 *         weeks: 9
 *         tuition: 10000
 *         minimumSkill: english,math
 */

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: The Course API
 */


/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Returns the list of all the courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: The list of the courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
router.get('/',getCourses);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The course was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       500:
 *         description: Some server error
 */
router.post(protect, authorize('publisher', 'admin'), addCourse);



/*
router
  .route('/')
  .get(getCourses)
  .post(protect, authorize('publisher', 'admin'), addCourse);
*/

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get the course by id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course id
 *     responses:
 *       200:
 *         description: The course description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: The course was not found
 */
router.get('/:id',getCourse);

/**
 * @swagger
 * /courses/{id}:
 *  put:
 *    summary: Update the course by the id
 *    tags: [Courses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The course id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Course'
 *    responses:
 *      200:
 *        description: The course was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Course'
 *      404:
 *        description: The course was not found
 *      500:
 *        description: Some error happened
 */
router.put(protect, authorize('publisher', 'admin'), updateCourse)

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Remove the courses by id
 *     tags: [Courses]
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
 *         description: The course was deleted
 *       404:
 *         description: The course was not found
 */
router.delete(protect, authorize('publisher', 'admin'), deleteCourse);

/*
router
  .route('/:id')
  .get(getCourse)
  .put(protect, authorize('publisher', 'admin'), updateCourse)
  .delete(protect, authorize('publisher', 'admin'), deleteCourse);
*/

module.exports = router
