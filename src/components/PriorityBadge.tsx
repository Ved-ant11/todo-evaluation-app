import styled from "@emotion/styled";
import type { Priority } from "../types/user";
import { getPriority } from "../constants/priorityConstants";

interface PriorityBadgeProps {
  level?: Priority;
}

export const PriorityBadge = ({ level }: PriorityBadgeProps) => {
  const priority = getPriority(level);

  return (
    <BadgeContainer>
      <PriorityCircle color={priority.color} />
      <PriorityLabel>{priority.label}</PriorityLabel>
    </BadgeContainer>
  );
};

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;

const PriorityCircle = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriorityLabel = styled.span`
  opacity: 0.9;
`;
