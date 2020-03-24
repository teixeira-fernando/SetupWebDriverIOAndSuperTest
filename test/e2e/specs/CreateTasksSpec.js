import TodoListPage from '../pages/todoListPage';

describe('Navigating to ToDo Task List', () => {
    beforeEach(() => {
        TodoListPage.open();
    });

    it('should allow the user to create new items', () => {
        const itemTitle = 'My new item';
        TodoListPage.createNewTodoItem(itemTitle);
        assert.equal(TodoListPage.textFromItemAtPosition(0), itemTitle);
    });

    it('should not allow to create items with empty names', () => {
        const itemTitle = '';
        TodoListPage.createNewTodoItem(itemTitle);
        assert.equal(TodoListPage.lastItemIndex, 0);
    });

    it('should allow items with repeated names', () => {
        const itemTitle = 'Repeated Item';
        TodoListPage.createNewTodoItem(itemTitle);
        TodoListPage.createNewTodoItem(itemTitle);
        assert.equal(
            TodoListPage.textFromItemAtPosition(TodoListPage.lastItemIndex - 1),
            itemTitle,
        );
    });
});
