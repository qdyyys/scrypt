export interface ThemeProps {
  lightTheme: boolean;
  setLightTheme?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LightIcoProps {
  color: string;
  lightTheme: boolean;
  setLightTheme?: (value: boolean) => void;
}
