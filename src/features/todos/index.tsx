import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch, RootState } from "../../app/store";
import { addTodo, completeTodo, removeTodo } from "./todosSlice";
import styled from "styled-components";

enum DisplayModeEnum {
  All = "All",
  UnChecked = "UnChecked",
  Completed = "Completed",
}

const ViewButtonList = [
  { id: DisplayModeEnum.All, text: "🐔 All" },
  { id: DisplayModeEnum.UnChecked, text: "🐣 Unchecked" },
  { id: DisplayModeEnum.Completed, text: "🍗 Completed" },
];

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [displayMode, setDisplayMode] = useState(DisplayModeEnum.UnChecked);

  const dispatch = useDispatch<AppDispatch>();
  const todoList = useSelector((state: RootState) => state).reducer;
  const isAddDisabled = inputValue.length === 0;

  const filterTodoList = todoList.filter((item) =>
    displayMode === DisplayModeEnum.Completed ? item.completed : !item.completed
  );

  const displayTodoList =
    displayMode === DisplayModeEnum.All ? todoList : filterTodoList;

  function handleAddTodo() {
    const todoItem = {
      text: inputValue,
      id: uuidv4(),
      completed: false,
    };
    dispatch(addTodo(todoItem));
    setInputValue("");
  }

  return (
    <Container>
      <TodoTitle> Add a new to-do </TodoTitle>
      <InputContainer>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="I am going to do..."
        />
        <AddButton disabled={isAddDisabled} onClick={handleAddTodo}>
          + Add
        </AddButton>
      </InputContainer>

      <ViewSection>
        {ViewButtonList.map((button) => (
          <ViewButton
            key={button.id}
            onClick={() => setDisplayMode(button.id)}
            isActive={displayMode === button.id}
          >
            {button.text}
          </ViewButton>
        ))}
      </ViewSection>

      <TaskBoard>
        {displayTodoList.map((todoItem) => {
          return (
            <Item key={todoItem.id}>
              <ItemTextWrapper>
                <Checkbox
                  type="checkbox"
                  checked={todoItem.completed}
                  onChange={() => {
                    dispatch(
                      completeTodo({
                        completed: !todoItem.completed,
                        id: todoItem.id,
                      })
                    );
                  }}
                />
                <ItemText isCompleted={todoItem.completed}>
                  {todoItem.text}
                </ItemText>
              </ItemTextWrapper>
              <DeleteButton
                onClick={() => {
                  dispatch(removeTodo(todoItem.id));
                }}
              >
                Delete
              </DeleteButton>
            </Item>
          );
        })}
      </TaskBoard>
      {displayMode === DisplayModeEnum.All ? (
        <LeftTodo> {todoList.length} total to-dos, wow 😎 </LeftTodo>
      ) : displayMode === DisplayModeEnum.Completed ? (
        <LeftTodo>
          You have completed {filterTodoList.length} to-dos, amazing 🚀
        </LeftTodo>
      ) : (
        <LeftTodo>
          {filterTodoList.length} exciting unchecked to-dos are awaiting you 🚴🏻‍♂️
        </LeftTodo>
      )}
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  max-width: 600px;
`;

const TodoTitle = styled.div`
  color: ${({ theme }) => theme.colors.darkGreen};
  padding: 15px 0 15px 0;
  text-align: flex-start;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  height: 50px;
  border-radius: 15px;
`;

const Input = styled.input`
  font-size: 16px;
  flex: 1;
  background-color: transparent;
  border: none;
  overflow: hidden;
  outline: none;
  padding: 5px 20px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const AddButton = styled.button`
  font-size: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px 18px;
  color: ${({ theme }) => theme.colors.darkOrange};
  font-weight: 600;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkOrange};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.darkOrange};
  }
`;
const TaskBoard = styled.div`
  margin-top: 20px;
  background-color: white;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 70px;
  font-size: 20px;
  line-height: 50px;
  align-items: center;
  border-bottom: 1px #deedd6 solid;
  padding: 2px 5px;
`;

const ItemText = styled.p<{ isCompleted: boolean }>`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
  color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.darkGray : theme.colors.navyBlue};
  font-style: ${({ isCompleted }) => isCompleted && "italic"};
  font-weight: ${({ isCompleted }) => !isCompleted && "bold"};
`;

const Checkbox = styled.input`
  border-radius: 15px;
  width: 42px;
  height: 18px;
  outline: none;
  }
`;

const ItemTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.darkGreen};

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    border: 1px;
    color: ${({ theme }) => theme.colors.darkOrange};
  }
`;

const ViewSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  height: 45px;
  margin-top: 25px;
`;

const ViewButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.darkOrange : "transparent"};
  border: none;
  color: white;
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  width: 200px;
  height: 100%;
  outline: none;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    background-color: ${({ isActive, theme }) =>
      !isActive && theme.colors.orange};
    color: ${({ isActive, theme }) => !isActive && theme.colors.darkGray};
  }
`;

const LeftTodo = styled.div`
  text-align: center;
  margin: 20px 0;
  font-style: italic;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
