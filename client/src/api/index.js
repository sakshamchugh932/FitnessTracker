import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const UserSignUp = async (data) => {
  try {
    return await API.post("/user/signup", data);
  } catch (error) {
    console.error("SignUp Error:", error.message);
    console.log("Detailed Error:", error);
  }
};

export const UserSignIn = async (data) => {
  try {
    return await API.post("/user/signin", data);
  } catch (error) {
    console.error("SignIn Error:", error.message);
    console.log("Detailed Error:", error);
  }
};

export const getDashboardDetails = async (token) => {
  if (!token) {
    console.error("Authorization token is required");
    return;
  }
  try {
    return await API.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Dashboard Error:", error.message);
    console.log("Detailed Error:", error);
  }
};

export const getWorkouts = async (token, date) => {
  if (!token) {
    console.error("Authorization token is required");
    return;
  }
  const url = date
    ? `/user/workout?date=${encodeURIComponent(date)}`
    : "/user/workout";
  try {
    return await API.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Get Workouts Error:", error.message);
    console.log("Detailed Error:", error);
  }
};

export const addWorkout = async (token, data) => {
  if (!token) {
    console.error("Authorization token is required");
    return;
  }
  try {
    const response = await API.post(`/user/workout`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.status >= 200) {
      console.log("Workout added successfully");
    }
  } catch (error) {
    console.error("Add Workout Error:", error.message);
    console.log("Detailed Error:", error);
  }
};
