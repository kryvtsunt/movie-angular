export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }


  profile() {
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  checkStatus() {
    return fetch('http://localhost:4000/api/status',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/login',
      {
        body: JSON.stringify(credentials),
        credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      })
  }

  logout() {
    return fetch('http://localhost:4000/api/logout',
      {
        credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      })
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  like(movie) {
    return fetch('http://localhost:4000/api/like/movie', {
      body: JSON.stringify(movie),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  checkLike(movieId) {
    return fetch('http://localhost:4000/api/like/movie/' + movieId, {
      credentials: 'include', // include, same-origin, *omit
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then (response => response.json());
  }

  updateUser(user) {
    return fetch('http://localhost:4000/api/user/update', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response =>
      response.json()
    )
  }
}