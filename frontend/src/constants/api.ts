const HOST = "http://localhost:4444";
const API_VERSION = "api/v1";

export const LOGIN_API = `${HOST}/${API_VERSION}/auth/login`;
export const VERIFY_API = `${HOST}/${API_VERSION}/auth/verify`;
export const ADD_SCHEDULE_API = `${HOST}/${API_VERSION}/schedules`;
export const GET_SCHEDULE_OF_USER = `${HOST}/${API_VERSION}/schedules/user/`;
export const GET_ALL_SCHEDULES = `${HOST}/${API_VERSION}/schedules/all/`;
export const UPDATE_SCHEDULE_STATUS = `${HOST}/${API_VERSION}/schedules/`;
