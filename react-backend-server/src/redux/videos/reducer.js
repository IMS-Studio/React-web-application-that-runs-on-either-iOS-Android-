import {STORE_VIDEOS} from './actions'

const InitialState = {
  videosList: null,
  updatedAt: null
};

const VideosReducer = (state = InitialState, action) => {
  switch(action.type) {
   case STORE_VIDEOS:
    return {
      ...state,
       videosList: action.payload,
       updatedAt: Date.now(),
     }
   default:
      return state;
  }
}

export default VideosReducer;
