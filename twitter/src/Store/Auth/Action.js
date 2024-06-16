import axios from "axios";
import {
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LoGOUT,
  FIND_USER_BY_ID_SUCCESS,
  FIND_USER_BY_ID_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE
} from "./ActionType";
import { API_BASE_URL, api } from "../../Config/Api";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    console.log("Logged in user", data);
    if(data.jwt){
      localStorage.setItem("jwt", data.jwt);
    }else{
      console.log("problem")
    }
    
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error during login:', error);
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);
    console.log("Signed up user", data);
    if(data.jwt){
      localStorage.setItem("jwt", data.jwt);
    }
    
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error during registration:', error);
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};

export const getUserProfile = (jwt) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: { "Authorization": `Bearer ${jwt}` }
    })
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
  }
};

export const findUserById = (userId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/users/${userId}`)
    dispatch({ type: FIND_USER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    dispatch({ type: FIND_USER_BY_ID_FAILURE, payload: error.message });
  }
}

export const updateUserProfile = (reqData) => async (dispatch) => {
  try {
    const { data } = await api.put(`/api/users/update`,reqData)
    console.log("updated",data)
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
}

export const followUserAction = (userId) => async (dispatch) => {
  try {
    const { data } = await api.put(`/api/users/${userId}/follow`)
    console.log("followed user",data)
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    dispatch({ type: FOLLOW_USER_FAILURE, payload: error.message });
  }
}


export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("jwt");
    dispatch({ type: LoGOUT, payload: null });
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
