import Page from './page';

class TodoListPage extends Page {
    get newTodoField() {
        return $('.new-todo');
    }

    textFromItemAtPosition(position) {
        return $$('label[ng-dblclick="editTodo(todo)"]')[position].getText();
    }

    get lastItemIndex() {
        return $$('label[ng-dblclick="editTodo(todo)"]').length;
    }

    createNewTodoItem(title) {
        this.newTodoField.click();
        this.newTodoField.setValue(title);
        browser.keys('\uE007');
    }
}

export default new TodoListPage();
