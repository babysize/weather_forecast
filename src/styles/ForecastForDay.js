import { makeStyles } from "tss-react/mui";
import MyImage from '../images/sunny.jpg'

const useStyles = makeStyles()(
  {
    'paper-container': {
      backgroundImage: `url(${MyImage})`,
      backgroundSize: 'cover',
      paddingTop:'50%'
    }
  }
)

export default useStyles