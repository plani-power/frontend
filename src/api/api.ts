import axios from "axios";

export class Api {
    private static BASE_URL = 'http://choits.iptime.org/';

    public get(url: string, params: object) {
        axios.get(`${Api.BASE_URL}${url}`, params)
    }
}