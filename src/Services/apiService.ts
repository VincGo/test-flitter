import axios from "axios";

export const apiService = {
    //Récupère toutes les marques de voitures
    async get(){
        try {
            const response = await axios
                .get("https://test-api-7qyau6jusq-oa.a.run.app/api/v1/car/brands")
            return response.data
        } catch (err) {
            return console.log(err)
        }
    },
}