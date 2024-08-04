export type ApiResponse<T> = {
    data: T;
    status: number;
    success: true;
} | {
    status: number;
    success: false;
    errors: string[];
};

export type ApiListResponse<T> = {
    data: T;
    status: number;
    success: true;
    page: number;
    count: number;
    nbPages: number;
} | {
    status: number;
    success: false;
    errors: string[];
};

export type ApiRequest<Params, Response extends ApiResponse<unknown>> = (params: Params) => Promise<Response>;

export const mockApi = <P, R>(data: R, status?: number): (params: P) => Promise<ApiResponse<R>> => {
    return (params: P) => new Promise((resolve) => {
        console.debug('API call', params);
        setTimeout(() => {
            resolve({
                data,
                status: status ?? 200,
                success: true,
            });
        }, 1000);
    });
}

export const mockApiError = <P, R>(errors: string[], status?: number): (params: P) => Promise<ApiResponse<R>> => {
    return (params: P) => new Promise((resolve) => {
        console.debug('API call', params);
        setTimeout(() => {
            resolve({
                errors,
                status: status ?? 400,
                success: false,
            });
        }, 1000);
    });
}
