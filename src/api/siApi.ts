import {ApiListResponse, ApiRequest, mockApi} from "./utils.ts";
import {ListItem} from "../types/types.ts";

type GetListParams = {
    page: number;
    filter?: {
        type: 'department' | 'city';
        value: string;
        order: 'ASC' | 'DESC';
    };
};
type GetListResponse = ApiListResponse<ListItem>;
const getList: ApiRequest<GetListParams, GetListResponse> = mockApi<GetListParams, GetListResponse>({
    data: [
        {
            name: 'Lorem ipsum',
            department: 57,
            city: 'Saint-Avold',
            description: 'Description 1',
        },
        {
            name: 'Ipsum lorem',
            department: 75,
            city: 'Paris',
            description: 'Description 2',
        },
        {
            name: 'Lorem ipsum',
            department: 57,
            city: 'Saint-Avold',
            description: 'Description 1',
        },
        {
            name: 'Ipsum lorem',
            department: 75,
            city: 'Paris',
            description: 'Description 2',
        },
        {
            name: 'Lorem ipsum',
            department: 57,
            city: 'Saint-Avold',
            description: 'Description 1',
        },
        {
            name: 'Ipsum lorem',
            department: 75,
            city: 'Paris',
            description: 'Description 2',
        },
        {
            name: 'Lorem ipsum',
            department: 57,
            city: 'Saint-Avold',
            description: 'Description 1',
        },
        {
            name: 'Ipsum lorem',
            department: 75,
            city: 'Paris',
            description: 'Description 2',
        },
        {
            name: 'Lorem ipsum',
            department: 57,
            city: 'Saint-Avold',
            description: 'Description 1',
        },
        {
            name: 'Ipsum lorem',
            department: 75,
            city: 'Paris',
            description: 'Description 2',
        },
    ],
    status: 200,
    success: true,
    page: 1,
    count: 25,
    nbPages: 3,
});

export const siApi = {
    getList
}
