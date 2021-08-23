export const postArticle = async data => {
  try {
    const response = await fetch('/api/articles', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
      }),
      body: data,
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const getArticles = async () => {
  try {
    const response = await fetch('/api/articles');
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postVideo = async data => {
  //TODO FIX BACK END BODY
  console.log(data);
  try {
    const response = await fetch('/api/videos', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
      }),
      body: data,
    });
    const result = response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const postContent = async data => {
  try {
    const response = await fetch('/api/contents', {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
      }),
      body: data,
    });
    console.log(response);
    console.log(await response.json());
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
