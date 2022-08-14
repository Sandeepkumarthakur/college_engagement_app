const Post = require("../model/post");
//const Upvote = require('../model/upvote')

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({});
        res.render("blog.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotice = async (req, res) => {
    try {
        const notice = await Post.find({});
        res.render("notice.ejs", {notice});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllInterview = async (req, res) => {
    try {
        const Interview = await Post.find({});
        res.render("intervieww.ejs", {Interview});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllContent = async (req, res) => {
    try {
        var today = new Date();
        const content = await Post.find({});
        id = req.query.id;
        console.log(content[id].title);
        


        res.render("content.ejs", {
            content,
           
            id,
            today
        });


    } catch (err) {
        console.log(err);
    }
};

module.exports.updateUpvote = async(req, res) => {
    try {
        let user = req.user.id;
        let postId = req.params.id;

        let post = await Upvote.findOne({ post: postId });
        let upvotes = [...post.upvotes];

        let alreadyExists = false;
        upvotes.find((ele) => {
            ele.author == user;
            alreadyExists = true;
        })
        if (alreadyExists)
            upvotes = upvotes.filter((ele) => ele.author != user);
        else
            upvotes.push({ author: user });

        await Upvote.findOneAndUpdate({ post: postId }, { upvotes: upvotes });

        console.log(upvotes, 'upvotes');

        res.json({
            count: upvotes.length
        })

    } catch (err) {
        console.log(err);
    }
}

