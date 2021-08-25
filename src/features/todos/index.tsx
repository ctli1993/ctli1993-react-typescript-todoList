import { useState } from "react";
import styled from "styled-components";
import AddTodoButton from "./AddTodoButton";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <Title>Hello React Todo List</Title>
      <InputContainer>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="...今天要完成什麼"
        />
        <AddButton onClick={() => {}}>+ Add</AddButton>
      </InputContainer>

      <TaskBoard>
        <Item>
          <input type="checkbox" />
          <p>test</p>
          <DeleteButton>Delete</DeleteButton>
        </Item>
      </TaskBoard>
      <ViewSection>
        <ViewButton>My Todos</ViewButton>
        <ViewButton>In Progress</ViewButton>
        <ViewButton>Completed</ViewButton>
      </ViewSection>

      <LeftTodo>代辦事項：件 </LeftTodo>
    </Container>
  );
}

export default Todo;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  max-width: 600px;
`;

const Title = styled.h3`
  background-color: #76b8bc;
  color: white;
  padding: 30px 0;
  text-align: center;
  font-size: 40px;
  width: 100%;
`;

const InputContainer = styled.div`
  background-color: white;
  display: flex;
  height: 60px;
`;

const Input = styled.input`
  flex: 10;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
  padding: 5px 10px;
  color: #1f4a88;
`;

const AddButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  flex: 1;
  padding: 5px 10px;
  color: #1f4a88;
  font-weight: 600;
`;
const TaskBoard = styled.div`
  margin-top: 20px;
  background-color: white;
`;

const Item = styled.li`
  display: flex;
  height: 70px;
  font-size: 20px;
  line-height: 50px;
  align-items: center;
  border-bottom: 1px #ccc dotted;
  padding: 10px;
`;

const DeleteButton = styled.button`
  float: right;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #76b8bc;
  background-repeat: no-repeat;
  background-image: url(./delete.png);
`;

const ViewSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #76b8bc;
  height: 50px;
`;
const ViewButton = styled.button`
  background-color: Transparent;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 100px;
  height: 30px;
  outline: none;
  font-weight: 600;
  &:hover {
    color: #1f4a88;
  }
`;

const LeftTodo = styled.div`
  text-align: center;
  margin: 20px 0;
`;
