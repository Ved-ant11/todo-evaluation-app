// src/components/FilterBar.tsx
import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { isDark } from "../utils";

export type FilterType = "all" | "today" | "week" | "custom";
export interface FilterState {
  type: FilterType;
  startDate?: string;
  endDate?: string;
}

interface FilterBarProps {
  onFilterChange: (filter: FilterState) => void;
}

export const FilterBar = ({ onFilterChange }: FilterBarProps) => {
  const [activeButton, setActiveButton] = useState<FilterType>("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleButtonClick = (type: FilterType) => {
    setActiveButton(type);
    onFilterChange({ type });
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    if (e.target.value && endDate) {
      setActiveButton("custom");
      onFilterChange({ type: "custom", startDate: e.target.value, endDate });
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    if (startDate && e.target.value) {
      setActiveButton("custom");
      onFilterChange({ type: "custom", startDate, endDate: e.target.value });
    }
  };

  return (
    <FilterContainer>
      <ButtonGroup>
        <StyledButton
          variant={activeButton === "all" ? "contained" : "outlined"}
          onClick={() => handleButtonClick("all")}
        >
          All Tasks
        </StyledButton>
        <StyledButton
          variant={activeButton === "today" ? "contained" : "outlined"}
          onClick={() => handleButtonClick("today")}
        >
          Today
        </StyledButton>
        <StyledButton
          variant={activeButton === "week" ? "contained" : "outlined"}
          onClick={() => handleButtonClick("week")}
        >
          This Week
        </StyledButton>
      </ButtonGroup>
      <DateRangeGroup>
        <DateInput
          label="Start Date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          InputLabelProps={{ shrink: true }}
        />
        <DateInput
          label="End Date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </DateRangeGroup>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 18px;
  margin-bottom: 16px;
  background: ${({ theme }) => (isDark(theme.secondary) ? "#090b2258" : "#ffffff3e")};
  border: 1px solid ${({ theme }) => (isDark(theme.secondary) ? "#44479cb7" : theme.primary)};
  flex-wrap: wrap;
  gap: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  border-radius: 12px;
  padding: 8px 16px;
`;

const DateRangeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateInput = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 12px;
  }
  color-scheme: ${({ theme }) => (theme.darkmode ? "dark" : "light")};
`;
