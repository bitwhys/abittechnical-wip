import {
  coolGrey,
  vividCyan,
  vividPink,
  vividPurple,
  vividRed,
  vividYellow,
} from '@/theme/tokens/colors'

const palette = {
  background: {
    default: coolGrey['50'],
    paper: '#fff',
  },
  // built in MUI color scales
  primary: {
    ...vividPink,
    main: vividPink['600'], // 600
  },
  secondary: {
    ...coolGrey,
    main: coolGrey['500'],
  },
  error: { ...vividRed, main: vividRed['600'] },
  success: { ...vividPurple, main: vividPurple['500'] },
  warning: { ...vividYellow, main: vividYellow['500'] },
  info: { ...vividCyan, main: vividCyan['500'] },
  gray: {
    ...coolGrey,
    main: coolGrey['500'],
  },
}

export default palette
