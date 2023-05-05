import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode,
  className?: string,
  disable?: boolean,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface CommonButtonProps extends ButtonProps {
  icon?: ReactNode,
  type?: "elevated"
    | "filled"
    | "tonal"
    | "outlined"
    | "text"
    | undefined,
}

export interface IconButtonProps extends ButtonProps {
  type?: "basic"
    | "filled"
    | "outlined"
    | undefined,
}

export interface FABProps extends ButtonProps {
  size?: "normal"
    | "extended"
    | "small"
    | "large"
    | undefined,

  label?: string,

}


export interface SegmentedButtonProps extends ButtonProps {
  onChange?: (index: number) => void,
  data: SegmentedButtonData[],
  className?: string,
}

interface SegmentedButtonData{
  label: string,
  selected: boolean,
  icon?: ReactNode,
  disable?: boolean,
}