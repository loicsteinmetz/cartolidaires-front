import {ApiRequest, ApiResponse, mockApi, mockApiError} from "./utils.ts";

type GetTestParams = number;
type GetTestResponse = number;
const getTest: ApiRequest<GetTestParams, ApiResponse<GetTestResponse>> = mockApi<GetTestParams, GetTestResponse>(42);
const getErrorTest: ApiRequest<GetTestParams, ApiResponse<GetTestResponse>> = mockApiError<GetTestParams, GetTestResponse>(['Error']);

export const siApi = {
    getTest,
    getErrorTest
}
