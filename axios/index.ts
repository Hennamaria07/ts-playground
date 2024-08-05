import axios, {AxiosResponse} from 'axios';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    } catch (error: any) {
        console.log(error.message);
    }
}

fetchData();