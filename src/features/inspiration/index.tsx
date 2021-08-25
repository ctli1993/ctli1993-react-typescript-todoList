import { useEffect, useState } from "react";
import styled from "styled-components";
import { getInspirationByType } from "../../api/inspirationAPI";
import PrimaryButton from "../../common/components/Button";
import Loader from "../../common/components/Loader";
import inspirationTypeList from "./inspirationTypeList";
import InspirationType from "./InspirationType";

const INITIAL_INSPIRATION_TYPE = "random";
const INITIAL_INSPIRATION = "Pick a type, and get some fun things to do";

export default function Inspiration() {
  const [inspiration, setInspiration] = useState(INITIAL_INSPIRATION);
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
        <Result>{isLoading ? <Loader /> : `${emoji} ${inspiration}`}</Result>
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
  justify-content: center;
  text-align: center;
  margin: 20px 50px 5px 50px;
  padding: 80px 30px;
  border-radius: 10px;
`;

const Result = styled.div`
  font-size: 45px;
  font-family: Arial;
  font-weight: bold;
`;
