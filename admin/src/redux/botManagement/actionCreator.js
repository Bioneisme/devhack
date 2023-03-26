import actions from './actions';
import { API } from "../../api/index.js";

const {
  setTextCommandsRussian,
  setTextCommandsEnglish,
  setButtonCommandsRussian,
  setButtonCommandsEnglish,
  setSharePostRussian,
  setSharePostEnglish,
  setIsFetching,
  setError
} = actions;

const getBotText = () => {
  return async function (dispatch) {
    try {
      dispatch(setIsFetching(true));

      const response = await API.get(`/posts/getPost/8`);
      const { post } = response.data;

      dispatch(setTextCommandsRussian(post.title));
      dispatch(setTextCommandsEnglish(post.title));
      dispatch(setButtonCommandsRussian(post.text));
      dispatch(setButtonCommandsEnglish(post.text));
      dispatch(setSharePostRussian(post.author));
      dispatch(setSharePostEnglish(post.author));

      dispatch(setIsFetching(false));
    } catch (e) {
      console.log("e", e)
      dispatch(setError("Error"));
      dispatch(setIsFetching(false));
    }
  }
};

const patchBotText = (
  textCommandsRussian,
  textCommandsEnglish,
  buttonCommandsRussian,
  buttonCommandsEnglish,
  sharePostRussian,
  sharePostEnglish
) => {
  console.log("patchBotText called");
  return async function (dispatch) {
    try {
      dispatch(setIsFetching(true));
      await API.patch('/posts/editPost', {
        id: 8,
        title: textCommandsRussian,
        text: buttonCommandsRussian,
        author: sharePostRussian,
        image_url: "sfsdfsfddf"
      });
      dispatch(getBotText());
      dispatch(setIsFetching(false));
    } catch (e) {
      console.log("e", e)
      dispatch(setError("Error"));
      dispatch(setIsFetching(false));
    }
  }
};

export { getBotText, patchBotText };
