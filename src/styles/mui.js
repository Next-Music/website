import { createMuiTheme } from '@material-ui/core';
import colors from './colors';

export const theme = createMuiTheme({
  spacing: 4,
  palette: {
    mode: 'dark',
    primary: { main: colors.primary, contrastText: '#fff' }
  },
  typography: { fontFamily: 'Roboto-Regular', fontSize: 16 }
});

export default theme;
