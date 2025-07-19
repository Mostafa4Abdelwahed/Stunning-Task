import { Schema, model } from 'mongoose';

const ChatSchema = new Schema(
  {
    chatId: { type: Schema.Types.ObjectId, auto: true },
    message: { type: String, required: true },
    sections: [
      {
        title: String,
        content: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model('Chat', ChatSchema);
