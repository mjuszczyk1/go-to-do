import { Card, Icon } from "semantic-ui-react";

interface IItem {
    _id: string;
    task: string;
}

interface IAllItemsProps {
    items: IItem[];
}

const Items = ({ items }: IAllItemsProps) => {
    // TODO: implement click handler(s)
    // TODO: share consts from ToDoList
    // TODO: Context? probably overkill
    return (
        <>
            {items.map(item => {
                return (
                    <Card key={item._id} fluid>
                        <Card.Content>
                            <Card.Header textAlign="left">
                                {item.task}
                            </Card.Header>
                        </Card.Content>
                        <Card.Meta textAlign="right">
                            <a href="#" data-id={item._id}>
                                <Icon name="check circle" color="green" />
                                <span>Done</span>
                            </a>
                            <a href="#" data-id={item._id}>
                                <Icon name="undo" color="yellow" />
                                <span>Undo</span>
                            </a>
                            <a href="#" data-id={item._id}>
                                <Icon name="delete" />
                                <span>Delete</span>
                            </a>
                        </Card.Meta>
                    </Card>
                );
            })}
        </>
    );
};

export default Items;
