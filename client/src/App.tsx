import "./App.css";
import { Container } from "semantic-ui-react";
import { ToDoList } from "./components";

const App = () => (
    <div className="App">
        <Container>
            <ToDoList />
        </Container>
    </div>
);

export default App;
