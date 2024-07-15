import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-5R181Yjov5BNypzqhaTZYZOF",
    apiKey: "sk-None-ZkoJ99arsLVZlYVpzz7YT3BlbkFJ0c9mTk3aCs3myx4mVZbh",
    dangerouslyAllowBrowser: true
});

// Define a thunk for sending data to the API
export const textGenerationApi = createAsyncThunk('api/sendData', async (prompt) => {
  console.log(prompt.getQuestion);
 const stringifiedPrompt= JSON.stringify(prompt.getQuestion).slice(1, -1);
 const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {"role": "user", "content": stringifiedPrompt}
    ],
    stream: true,
 })

  if (!stream.response.ok) {
    throw new Error('Network response was not ok');
  }

  let responseData = ""
  for await (const chunk of stream){
    responseData += (chunk.choices[0]?.delta?.content || "")
  }
  
  return {stringifiedPrompt, responseData};
});

const textGenerationApiSlice = createSlice({
  name: 'textGenerationApi',
  initialState: {
    textGenHistory: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(textGenerationApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(textGenerationApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.textGenHistory.push({
          prompt: action.payload.stringifiedPrompt,
          response: action.payload.responseData
        })
      })
      .addCase(textGenerationApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {resetStatus} = textGenerationApiSlice.actions

export default textGenerationApiSlice.reducer;