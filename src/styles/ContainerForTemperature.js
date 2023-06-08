import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()(
  {
    'container': {
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      height: 200,
      position: 'relative',
      '&::before': {
        position: 'absolute',
        content: '"  "',
        width: '100%',
        height: '100%',
        opacity: 0.2,
        backgroundColor:'white',
      }
    },
    'img': {
      height:'40%'
    }
  }
)

export default useStyles