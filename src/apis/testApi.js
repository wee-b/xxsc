
import http from "@/utils/http.js";

export function getCate(){
    return http.get('/home/caetegory/head')
}