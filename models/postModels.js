const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: [
    {
      type: String,
      trim: true,
    },
  ],
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

postSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

module.exports = Post;