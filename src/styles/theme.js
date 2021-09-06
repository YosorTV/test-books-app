import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    type:'dark',
    primary:{
      main:"#f3f3f3",
      secondary:"#f6f19b"
    }
  },
  overrides:{
    MuiCssBaseline: {
      '@global': {
        "*":{
          boxSizing:"border-box",
          margin:0,
          padding:0,
          listStyle:"none"
        }
      }
    }
  }
})