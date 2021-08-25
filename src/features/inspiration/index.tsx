import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getInspirationByType } from "../../api/inspirationAPI";
import PrimaryButton from "../../common/components/Button";
import Loader from "../../common/components/Loader";
import inspirationTypeList from "./inspirationTypeList";
import InspirationType from "./InspirationType";
import { AppDispatch } from "../../app/store";
import { addTodo } from "../todos/todosSlice";
import { useLocation } from "wouter";

const INITIAL_INSPIRATION_TYPE = "random";
const INITIAL_INSPIRATION = "Pick a type, and get some fun things to do";

export default function Inspiration() {
  const [location, setLocation] = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [inspiration, setInspiration] = useState(INITIAL_INSPIRATION);
  const [addTodoBtnMode, setAddTodoBtnMode] = useState(true);
  const [selectedInspirationType, setSelectedInspirationType] = useState(
    INITIAL_INSPIRATION_TYPE
  );
  const [isLoading, setIsLoading] = useState(false);
  const isInitialInspirationType = inspiration === INITIAL_INSPIRATION;
  const emoji = isInitialInspirationType ? "🎉" : "😎";

  function handleClick() {
    setIsLoading(true);
    getInspirationByType(selectedInspirationType)
      .then((result) => {
        setInspiration(result);
        setAddTodoBtnMode(true);
      })
      .catch(() => {
        setInspiration("Oops! Something Went Wrong, but Let's Stay Calm!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSelectType(inspirationType: string) {
    setSelectedInspirationType(inspirationType);
    setInspiration(INITIAL_INSPIRATION);
  }

  function handleAddTodo() {
    if (addTodoBtnMode) {
      const todoItem = {
        text: inspiration,
        id: uuidv4(),
        completed: false,
      };
      dispatch(addTodo(todoItem));
      setAddTodoBtnMode(false);
    } else {
      setLocation("/");
    }
  }

  return (
    <div>
      <SelectionWrapper>
        {inspirationTypeList.map((inspirationType) => {
          return (
            <InspirationType
              inspirationType={inspirationType}
              selectedInspirationType={selectedInspirationType}
              onClick={() => handleSelectType(inspirationType)}
            />
          );
        })}
      </SelectionWrapper>
      <ButtonWrapper>
        <PrimaryButton onClick={handleClick} disabled={isLoading}>
          Get A New Thing to Do
        </PrimaryButton>
      </ButtonWrapper>
      <ResultWrapper isDefaultBackground={isInitialInspirationType}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Result>
              {emoji} {inspiration}
            </Result>
            {!isInitialInspirationType && (
              <AddTodoButton onClick={handleAddTodo}>
                {addTodoBtnMode ? "Add it to to-do" : "Go Check out"}
              </AddTodoButton>
            )}
          </>
        )}
      </ResultWrapper>
    </div>
  );
}

const SelectionWrapper = styled.div`
  display: content;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;
  margin: 15px 150px 0 150px;
  padding: 20px 0;
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;
  padding: 20px 0;
  border-radius: 10px;
`;

const ResultWrapper = styled.div<{ isDefaultBackground: boolean }>`
  align-items: center;
  background-color: ${({ theme, isDefaultBackground }) =>
    isDefaultBackground ? theme.colors.gray : theme.colors.lightGreen};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 20px 50px 5px 50px;
  padding: 50px 30px;
  border-radius: 10px;
  min-height: 150px;
`;

const Result = styled.div`
  font-size: 45px;
  font-family: Arial;
  font-weight: bold;
`;

const AddTodoButton = styled.button`
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: ${({ theme }) => `1px solid ${theme.colors.darkGreen}`};
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
