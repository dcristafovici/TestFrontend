export const PATH_TO_SERVER = 'http://localhost:5000';
export const USER_ENTITY = '/user'


export const REGISTER_USER_PATH = `${PATH_TO_SERVER}${USER_ENTITY}/register`
export const LOGIN_USER_PATH = `${PATH_TO_SERVER}${USER_ENTITY}/login`
export const VERIFY_ACCESS_TOKEN = `${PATH_TO_SERVER}${USER_ENTITY}/verifyToken`
export const VERIFY_REFRESH_TOKEN = `${PATH_TO_SERVER}${USER_ENTITY}/verifyRefreshToken`