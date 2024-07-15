// redux/rootReducer.js
import { combineReducers } from 'redux';
import textGenerationApiReducer from './slice/textGenerateApi';
import  imageGenerationApiReducer from './slice/imageGenerateApi';

const rootReducer = combineReducers({
    textGenerationApi: textGenerationApiReducer,
    imageGenerationApi: imageGenerationApiReducer,
});

export default rootReducer;