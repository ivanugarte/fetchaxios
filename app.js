 const getNombre = (idPost) => {

  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => {
      return res.json()
    })
    .then(post => {
      console.log(post.userId)
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => {
          return res.json()
        })
        .then(user => {
          console.log(user.name)
        })
    })
  };

  getNombre(7);

  // llamada con fetch (async, await)

  const getNombreAsync = async (idPost) => {

    try {
      const resPost = await  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      const post = await resPost.json()
      console.log(post)
      const resUser = await   fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      const user = await resUser.json()
      console.log(user);  
    } 
    catch (error) {
      console.log(error);
    }
  };

  getNombreAsync(80);

// llamada con Axios (async,await) 

  const getNombreAxios = async (idPost) => {

    try {
      const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
      console.log('axios -----------------------------');  
      console.log(resUser.data.name);  
    } 
    catch (error) {
      console.log(error);
    }
  };

  getNombreAxios(80);