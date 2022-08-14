const express = require("express");
const path = require("path");
const router = express.Router();
const {getAllBlogs,getAllNotice,getAllInterview,getAllContent,updateBlogForm, updateUpvote} = require('../controllers/postController')
router.get("/blog", getAllBlogs);
const { authenticateToken } = require('../controllers/profileController');
router.get("/notice", getAllNotice );

router.get("/interview", getAllInterview);
router.get('/upvote/:id/:token',authenticateToken ,updateUpvote)
router.get("/content", getAllContent);

module.exports = router;
