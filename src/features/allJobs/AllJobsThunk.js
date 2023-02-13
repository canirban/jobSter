import customFetch, { checkForUnAuthorizedResponse } from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;

  let url = `/jobs?page=${page}&status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (e) {
    return checkForUnAuthorizedResponse(e, thunkAPI);
  }
};
export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");
    return resp.data;
  } catch (e) {
    return checkForUnAuthorizedResponse(e, thunkAPI);
  }
};
