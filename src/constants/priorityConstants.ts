import type { Priority } from "../types/user";

export const priorities: { level: Priority; label: string; color: string }[] = [
  { level: "None", label: "None", color: "#808080" },
  { level: "Low", label: "Low", color: "#2ECC71" },
  { level: "Medium", label: "Medium", color: "#F1C40F" },
  { level: "High", label: "High", color: "#E67E22" },
  { level: "Critical", label: "Critical", color: "#E74C3C" },
];

export const getPriority = (level?: Priority) => {
  return priorities.find((p) => p.level === level) || priorities[0];
};
