interface IItem {
    _id: string;
    task: string;
}

export class TaskApi {
    getItems = async (): Promise<IItem[]> =>
        await fetch(`${this.#HOST}${this.#ENDPOINTS.TASK}`).then(resp =>
            resp.json()
        );

    addItem = async (task: string): Promise<void> =>
        fetch(`${this.#HOST}${this.#ENDPOINTS.TASK}`, {
            ...this.#POST_HEAD,
            body: JSON.stringify({ task }),
        }).then(resp => resp.json());

    #HOST: string = "http://localhost:8080";
    #POST_HEAD: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    };
    #ENDPOINTS = {
        TASK: "/api/task",
    };
}
