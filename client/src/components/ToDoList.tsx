import { useEffect, useState } from "react";
import { Card, Form, Header, Input } from "semantic-ui-react";
import { TaskApi } from "../api";
import Items from "./Items";

const taskApi = new TaskApi();

// Main Component
export const ToDoList = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<JSX.Element>();
    const [task, setTask] = useState<string>("");
    const [err, setErr] = useState<string>();

    useEffect(() => {
        (async () => {
            getItems();
        })();
    }, []);

    const getItems = async (): Promise<void> =>
        await taskApi
            .getItems()
            .then(data => setItems(<Items items={data} />))
            .catch((err: Error) => {
                setErr(err.message);
                console.error(err);
            })
            .finally(() => setLoading(false));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTask(e.currentTarget.value);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!task) {
            return;
        }

        setLoading(true);
        await taskApi
            .addItem(task)
            .then(async () => await getItems())
            .catch((err: Error) => {
                setErr(err.message);
                console.error(err);
            })
            .finally(() => setTask(""));
    };

    return (
        <>
            {err && <h1>{err}</h1>}
            <div className="row">
                <Header as="h1">ToDo List</Header>
            </div>
            <div className="row">
                <Form onSubmit={handleSubmit}>
                    <Input
                        name="task"
                        value={task}
                        onChange={handleChange}
                        required
                        fluid
                    />
                </Form>
            </div>
            {loading && <h1>Loading...</h1>}
            {!loading && (
                <div className="row">
                    <Card.Group>{items}</Card.Group>
                </div>
            )}
        </>
    );
};
