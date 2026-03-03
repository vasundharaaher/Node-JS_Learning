import db from '#db';

import { addBlogSchema } from '#validation/blog.validation';

export const addBlog = async (req) => {
        const payload = addBlogSchema.parse(req.body);
        const blogDetails = await db.travel_blog.create({
                data: {
                        ...payload,
                        pictures: '',
                },
        });

        return blogDetails;
};

export const updateBlog = async (req) => {
        const blog_id = numberSchema.parse(req.param.blog_id);
        const payload = addBlogSchema.parse(req.body);
        const blogDetails = await db.travel_blog.create({
                data: payload,
                where: {
                        blog_id: blog_id,
                },
        });

        return blogDetails;
};

export const deleteBlog = async (req) => {
        const blog_id = numberSchema.parse(req.param.blog_id);
        const blogDetails = await db.travel_blog.delete({
                where: {
                        blog_id: blog_id,
                },
        });

        return blogDetails;
};

export const getAllBlog = async () => {
        const getAllBlog = await db.travel_blog.findMany();

        return getAllBlog;
};

export const getBlogByuser = async (req) => {
        const user_id = req.user;

        const getBlogByuser = await db.travel_blog.findMany({
                where: {
                        user_id: user_id,
                },
        });

        return getBlogByuser;
};
