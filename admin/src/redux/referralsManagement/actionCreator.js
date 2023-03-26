import actions from './actions';
import { API } from "../../api/index.js";

const { setTextCommandsText, setButtonCommandsText, setSharePostText, setIsFetching, setError } = actions;

const getBotText = () => {
  return async function (dispatch) {
    try {
      dispatch(setIsFetching(true));

      const response = await API.get(`/posts/getPost/8`);
      const { post } = response.data;
      console.log(post)

      dispatch(setTextCommandsText(post.title));
      dispatch(setButtonCommandsText(post.text));
      dispatch(setSharePostText(post.author));

      dispatch(setIsFetching(false));
    } catch (e) {
      console.log("e", e)
      dispatch(setError("Error"));
      dispatch(setIsFetching(false));
    }
  }
};

const patchBotText = (title, text, author) => {
  console.log("patchBotText called");
  return async function (dispatch) {
    try {
      dispatch(setIsFetching(true));
      await API.patch('/posts/editPost', {
        id: 8,
        title,
        text,
        author,
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
