
import http from "@/utils/http.js";

export function getCatetoryApi(){
    return http.get('/home/caetegory/head')
}