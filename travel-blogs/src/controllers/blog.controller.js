import {
        addBlog,
        deleteBlog,
        getAllBlog,
        getBlogByuser,
        updateBlog,
} from '#services/blog.servive';

export const addBlogHandler = async (req, res) => {
        const response = await addBlog(req);
        res.status(200).json({
                msg: 'Blog added successfully',
                success: true,
                response,
        });
};

export const updateBlogHandler = async (req, res) => {
        const response = await updateBlog(req);
        res.status(200).json({
                msg: 'Blog has been updated !',
                success: true,
                response,
        });
};

export const deleteBlogHandler = async (req, res) => {
        await deleteBlog(req);
        res.status(200).json({
                msg: 'Blog deleter success',
                success: true,
        });
};

export const getBlogHandler = async (res) => {
        const blogs = await getAllBlog();
        res.status(200).json({
                msg: 'All Blogs',
                success: true,
                blogs,
        });
};

export const getBlogByuserHandler = async (req, res) => {
        const myblog = await getBlogByuser(req);
        res.status(200).json({
                msg: 'My Blog',
                success: true,
                myblog,
        });
};
