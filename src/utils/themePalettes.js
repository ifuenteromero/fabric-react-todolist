const themeGreen={
    palette: {
        themePrimary: '#00783e',
        themeLighterAlt: '#f0faf5',
        themeLighter: '#c4e9d7',
        themeLight: '#96d6b7',
        themeTertiary: '#46ae7b',
        themeSecondary: '#10884e',
        themeDarkAlt: '#006c38',
        themeDark: '#005b2f',
        themeDarker: '#004323',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#e0e0e0',
        neutralSecondary: '#c0c0c0',
        neutralPrimaryAlt: '#a3a3a3',
        neutralPrimary: '#979797',
        neutralDark: '#727272',
        black: '#545454',
        white: '#ffffff',
    }
}
const themeDark = {
    palette: {
        themePrimary: '#00783e',
        themeLighterAlt: '#000502',
        themeLighter: '#00130a',
        themeLight: '#002413',
        themeTertiary: '#004825',
        themeSecondary: '#006936',
        themeDarkAlt: '#0d854b',
        themeDark: '#259860',
        themeDarker: '#4fb383',
        neutralLighterAlt: '#323130',
        neutralLighter: '#31302f',
        neutralLight: '#2f2e2d',
        neutralQuaternaryAlt: '#2c2b2a',
        neutralQuaternary: '#2a2928',
        neutralTertiaryAlt: '#282726',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#999',
    }
} 

const themeMostaza =  {
    palette: {
        themePrimary: '#d40049',
        themeLighterAlt: '#080003',
        themeLighter: '#22000c',
        themeLight: '#3f0016',
        themeTertiary: '#7f002c',
        themeSecondary: '#ba0040',
        themeDarkAlt: '#d81659',
        themeDark: '#de356f',
        themeDarker: '#e76692',
        neutralLighterAlt: '#dbbe2a',
        neutralLighter: '#ddc032',
        neutralLight: '#dfc43e',
        neutralQuaternaryAlt: '#e0c746',
        neutralQuaternary: '#e2c94c',
        neutralTertiaryAlt: '#e7d168',
        neutralTertiary: '#c8c8c8',
        neutralSecondary: '#d0d0d0',
        neutralPrimaryAlt: '#dadada',
        neutralPrimary: '#ffffff',
        neutralDark: '#f4f4f4',
        black: '#f8f8f8',
        white: '#d9bb22',
    }
}

const themeFosfo = {
    palette: {
        themePrimary: '#252527',
        themeLighterAlt: '#040405',
        themeLighter: '#090909',
        themeLight: '#0d0d0d',
        themeTertiary: '#111112',
        themeSecondary: '#151516',
        themeDarkAlt: '#19191a',
        themeDark: '#1d1d1f',
        themeDarker: '#212123',
        neutralLighterAlt: '#4bdb2a',
        neutralLighter: '#51dd32',
        neutralLight: '#5cdf3e',
        neutralQuaternaryAlt: '#62e046',
        neutralQuaternary: '#68e24c',
        neutralTertiaryAlt: '#7fe768',
        neutralTertiary: '#480505',
        neutralSecondary: '#910a0a',
        neutralPrimaryAlt: '#d50f0f',
        neutralPrimary: '#f21111',
        neutralDark: '#f54848',
        black: '#f77777',
        white: '#44d922',
    }
}

const themeElvira = {
    palette: {
      themePrimary: '#00a9d3',
      themeLighterAlt: '#000708',
      themeLighter: '#001b22',
      themeLight: '#00333f',
      themeTertiary: '#00657e',
      themeSecondary: '#0094b9',
      themeDarkAlt: '#16b0d7',
      themeDark: '#35bcdd',
      themeDarker: '#65cce6',
      neutralLighterAlt: '#e1f8f6',
      neutralLighter: '#ddf4f2',
      neutralLight: '#d4eae8',
      neutralQuaternaryAlt: '#c5dad8',
      neutralQuaternary: '#bcd0ce',
      neutralTertiaryAlt: '#b5c8c6',
      neutralTertiary: '#080808',
      neutralSecondary: '#0a0a0a',
      neutralPrimaryAlt: '#0c0c0c',
      neutralPrimary: '#161616',
      neutralDark: '#111111',
      black: '#141414',
      white: '#e7fffd',
    }
  }

export  const colorThemeCells = [
    { id: 'green', label: 'green', color: '#00783e',themeColor:themeGreen },
    { id: 'dark', label: 'dark', color: '#323130',themeColor:themeDark},
    { id: 'mostaza', label: 'mostaza', color: '#d9bb22',themeColor:themeMostaza },
    { id: 'fosfo', label: 'fosfo', color: '#44d922',themeColor:themeFosfo },
    { id: 'elvira', label: 'elvira', color: '#e7fffd',themeColor:themeElvira },
];

export const getTheme = (theme) => {
    const index = colorThemeCells.findIndex(item => item.id===theme);
    const color = colorThemeCells[index].themeColor
    return color;
}

export const getBackground = (theme) => {
    const themeBackground = colorThemeCells.find(item=>item.id===theme).themeColor.palette.white;
    return themeBackground;
}