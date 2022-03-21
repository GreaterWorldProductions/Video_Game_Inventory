import 'styled-components';
import { Theme } from '@mui/material/styles';
import { CustomTheme } from "./themes";

declare module '@mui/material/styles' {
    interface Theme extends CustomThem {}
    interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
