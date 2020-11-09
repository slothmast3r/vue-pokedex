import axios from "axios";

export default function getFromUrl(url){
    return axios
    .get(url)
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        console.log(error)
    })
}