import axios from 'axios';
// import { currentURL } from '../../index';
const url = `http://${window.location.host.match(/^[^:]+/g)[0]}:8090/api/`;
// const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:/api/"
export function loadPresents(username) {
  return (dispatch) => {
    axios
      .get(`${url}present?username=${username}`)
      .then((res) => {
        let presents = res.data.presents;
        presents.sort(function (a, b) {
          // var dateA = new Date(a.createdAt),
          //   dateB = new Date(b.createdAt);
          return a.id - b.id; //сортировка по возрастающей дате
        });
        console.log(res.data.presents);
        dispatch({ type: 'LOAD_PRESENTS', presents });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
}
export function getCurrentUser() {
  return (dispatch) => {
    axios
      .get(`${url}user/`, {
        headers: {
          Authorization: 'Token ' + localStorage.Token,
        },
      })
      .then((res) => {
        let user = res.data;
        dispatch({ type: 'SET_USER', user });
      })
      .catch((err) => alert(err.response.data.message));
  };
}

export function getFriends(username) {
  return (dispatch) => {
    axios
      .get(`${url}profiles/${username}/friends`, {
        headers: {
          Authorization: 'Token ' + localStorage.Token,
        },
      })
      .then((res) => {
        let friends = res.data.profiles;
        dispatch({ type: 'SET_FRIENDS', friends });
      })
      .catch((err) => alert(err.response.data.message));
  };
}

export function getCurrentProfile() {
  return (dispatch) => {
    let username = JSON.parse(localStorage.Auth).user.username;
    axios
      .get(`${url}profiles/${username}`, {
        headers: {
          Authorization: 'Token ' + localStorage.Token,
        },
      })
      .then((res) => {
        let profile = res.data;
        console.log(profile);
        dispatch({ type: 'SET_PROFILE', profile });
      })
      .catch((err) => alert(err.response.data.message));
  };
}

export function getProfile(username) {
  return (dispatch) => {
    axios
      .get(`${url}profiles/${username}`, {
        headers: {
          Authorization: 'Token ' + localStorage.Token,
        },
      })
      .then((res) => {
        let profile = res.data.profile;
        // console.log(profile.profile);
        dispatch({ type: 'SET_PROFILE', profile });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function getPresent(present_slug) {
  return (dispatch) => {
    axios
      .get(`${url}present/${present_slug}`)
      .then((res) => {
        let present = res.data;
        dispatch({ type: 'VIEW_PRESENT', present });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function updatePresent(present_slug, upd_present) {
  console.log(present_slug);
  console.log(upd_present);
  return (dispatch) => {
    axios
      .put(`${url}present/${present_slug}`, {
        present: { state: upd_present },
      })
      .then((res) => {
        let present = res.data;
        dispatch({ type: 'UPDATE_PRESENT', present });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function deletePresent(present_slug) {
  // console.log(present_slug);
  // console.log(upd_present);
  return (dispatch) => {
    axios
      .delete(`${url}present/${present_slug}`, {
        headers: {
          Authorization: 'Token ' + localStorage.Token,
        },
      })
      .then((res) => {
        let present = {};
        dispatch({ type: 'DELETE_PRESENT', present });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function createPresent(present) {
  //name, address, cost, state
  return (dispatch) => {
    axios
      .post(
        `${url}present/`,
        {
          present,
        },
        {
          headers: {
            Authorization: 'Token ' + localStorage.Token,
          },
        }
      )
      .then((res) => {
        let response = res.data;
        dispatch({ type: 'CREATE_PRESENT', response });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
//id, user_id
export function follow(username) {
  return (dispatch) => {
    axios
      .post(
        `${url}profiles/${username}/follow`,
        {},
        {
          headers: {
            Authorization: 'Token ' + localStorage.Token,
          },
        }
      )
      .then((res) => {
        let user = res.data;
        dispatch({ type: 'FOLLOW_USER', user });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function unfollow(username) {
  return (dispatch) => {
    axios
      .delete(`${url}profiles/${username}/follow`, {
        headers: {
          Authorization: 'Token ' + localStorage.Token,
        },
      })
      .then((res) => {
        dispatch({ type: 'UNFOLLOW_USER', username });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function LoginUser(user_data) {
  console.log(url);
  return (dispatch) => {
    axios
      .post(`${url}users/login`, user_data)
      .then((res) => {
        let user = res.data;
        localStorage.setItem('Auth', JSON.stringify(user));
        localStorage.setItem('Token', JSON.parse(localStorage.Auth).user.token);
        dispatch({ type: 'SET_USER', user });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
}

export function RegisterUser(user_data) {
  return (dispatch) => {
    axios
      .post(`${url}users/`, user_data)
      .then((res) => {
        let user = res.data;
        localStorage.setItem('Auth', JSON.stringify(user));
        localStorage.setItem('Token', JSON.parse(localStorage.Auth).user.token);
        // alert('You have successfully registered!');
        dispatch({ type: 'SET_USER', user });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
export function Logout() {
  localStorage.removeItem('Auth');
  localStorage.removeItem('Token');
  return (dispatch) => {
    let user = {};
    dispatch({ type: 'LOGOUT', user });
  };
}

export function findSameProfile(username) {
  return (dispatch) => {
    axios
      .get(`${url}profiles/find/${username}`)
      .then((res) => {
        let profiles = res.data.profiles;
        dispatch({ type: 'SET_PROFILES', profiles });
      })
      .catch((err) => alert(err.response.data.message));
  };
}
