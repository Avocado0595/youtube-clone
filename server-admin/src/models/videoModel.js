import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    _userId: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId(),
    },

    title: {
      type: String,
      required: true,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    videoImgUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/* 
---video 
     ---views 
     ---comments
     ---likes
     ---dislikes 
*/

export default mongoose.model("videos", videoSchema);
