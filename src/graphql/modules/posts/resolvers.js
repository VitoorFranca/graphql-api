const Post = require("../../../models/Post");

module.exports = {
  Query: {
    post: () => Post.find(),
    posts: (_, { id }) => Post.find(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
};
