import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import OpenAI from "openai";

const openai = new OpenAI({
    organization: "org-5R181Yjov5BNypzqhaTZYZOF",
    apiKey: "",
    dangerouslyAllowBrowser: true
});

// Define a thunk for sending data to the API
export const imageGenerationApi = createAsyncThunk('api/sendData1', async (prompt) => {
    console.log(prompt);
    // const stringifiedPrompt = JSON.stringify(prompt.getQuestion).slice(1, -1);
    const response = await openai.images.generate({ model: "dall-e-3", prompt: prompt, n: 1, quality: 'standard' });
    return {prompt, response};
});

const imageGenerationApiSlice = createSlice({
    name: 'imageGenerateApi',
    initialState: {
        imagesHistory: [],
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
            .addCase(imageGenerationApi.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(imageGenerationApi.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.imagesHistory.push({
                    prompt: action.payload.prompt,
                    revised_prompt: action.payload.response.data[0].revised_prompt,
                    url: action.payload.response.data[0].url
                });
            })
            .addCase(imageGenerationApi.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { resetStatus } = imageGenerationApiSlice.actions

export default imageGenerationApiSlice.reducer;