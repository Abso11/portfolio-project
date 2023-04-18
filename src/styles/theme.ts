const customColor = (color: string): string => color;

export const theme = {
  colors: {
    custom: customColor,
    primary: {
      deep_blue: '#000022',
      ultramarine_blue: '#0066FF',
      white: '#FFFFFF',
      ghost_white: '#CACACA',
      black: '#000000',
      purple: '#1A1233',
      green: '#003D2E'
    },
    secondary: {
      ultramarine_blue_90: '#237BFF',
      ultramarine_blue_70: '#4790FF',
      ultramarine_blue_50: '#7BB0FF',
      ultramarine_blue_40: '#A1C7FF',
      ultramarine_blue_20: '#D4E5FF',
      ultramarine_blue_10: '#ECF3FF',
      deep_blue_90: '#00193F',
      deep_blue_70: '#002254',
      deep_blue_50: '#00327C',
      deep_blue_30: '#0049B6',
      deep_blue_10: '#005AE4',
      purple_90: '#211444',
      purple_80: '#2A1A53',
      purple_70: '#3B2671',
      purple_60: '#4B318C',
      purple_50: '#6143AF',
      purple_40: '#6E4BC7',
      purple_30: '#7851DB',
      purple_20: '#855BEF',
      purple_10: '#8B5EFC',
      ghost_white_90: '#DADADB',
      ghost_white_70: '#E0E0E1',
      ghost_white_50: '#EAEAEA',
      ghost_white_30: '#F3F3F3',
      ghost_white_10: '#F8F8F9',
      black_90: '#1E1E1E',
      black_70: '#3C3C3C',
      black_50: '#5B5B5B',
      black_30: '#797979',
      black_20: '#979797',
      black_10: '#B5B5B5'
    },
    signal_colors: {
      red: '#EE0908',
      yellow: '#FFEE00',
      green: '#19D363',
      light_blue: '#00BBFF'
    },
    shop_colors: {
      gold: '#EFA73A',
      orange: '#E07A00',
      green: '#30974F'
    },
    black: '#212121',
    blackChart: 'rgba(0, 0, 0, 0.42)',
    white: '#fff',
    grey: '#f2f2f2',
    greyTable: '#f5f5f5',
    backgroundIcon: '#dedede',
    blueDarker: '#2F6EDC',
    blue01: '#2D8EFF',
    blue02: '#90C7FF',
    blue03: '#BCDCFF',
    blue04: '#DCEEFF',
    blue05: '#F2F8FF',
    blueChart: 'rgba(45, 142, 255, 0.15)',
    yellowChart: 'rgba(255, 188, 4, 0.15)',
    yellowFooter: '#FFFAE6',
    greyChart: 'rgba(155, 155, 155, 0.15)',
    green: '#00A133',
    green01: '#13ce67',
    darkGrey: '#E0E0E0',
    primaryBlack: '#212121',
    pink: 'rgba(254, 49, 41, 0.15);',
    grey01: 'rgba(33, 33, 33, 0.86)',
    grey02: 'rgba(33, 33, 33, 0.45)',
    grey03: 'rgba(33, 33, 33, 0.15)',
    grey04: 'rgba(33, 33, 33, 0.04)',
    grey05: '#757575',
    greyInputBorder: ' #D9D9D9',
    overlay: 'rgba(0, 0, 0, 0.5)',
    availableGreen: '#19AC1E',
    waitingEvYellow: '#FFBC04',
    waitingLmOrange: ' #FE6A07',
    errorRed: '#FE3129',
    validationRed: '#ffe0de',
    primaryButtonPressed: '#2F6EDC',
    secondaryButtonPressed: '#CCCCCC',
    borderGrey: '#d3d3d3',
    secondaryButtonText: 'rgba(33, 33, 33, 0.42)',
    circleBlue: '#3081F0',
    circleLightBlue: '#64B0FF',
    blueLight: '#eaf3ff',
    limit: '#F94747',
    otherStatus: '#E0E0E0',
    transparent: {
      full: 'rgba(0,0,0,0)',
      black: {
        resting: 'rgba(33, 33, 33, 0)',
        hover: 'rgba(33, 33, 33, 0.04)',
        focused: 'rgba(33, 33, 33, 0.15)',
        selected: 'rgba(33, 33, 33, 0.15)',
        overlay_background: 'rgba(33, 33, 33, 0.42)',
        tooltip_background: 'rgba(33, 33, 33, 0.86)'
      },
      blue: {
        active: 'rgba(45, 142, 255, 0.06)',
        hover: 'rgba(45, 142, 255, 0.06)',
        focused: 'rgba(45, 142, 255, 0.16)',
        dark: 'rgba(45, 142, 255, 0.36)',
        light: 'rgba(45, 142, 255, 0.6)'
      },
      white: {
        overlay: 'rgba(255, 255, 255, 0.75)'
      },
      overlay: 'rgba(0, 0, 0, 0.15)',
      gray: 'rgba(33, 33, 33, 0.06)'
    }
  },
  spacing: {
    space_2: '2px',
    space_4: '4px',
    space_8: '8px',
    space_12: '12px',
    space_16: '16px',
    space_24: '24px',
    space_32: '32px',
    space_40: '40px',
    space_48: '48px'
  },
  fontWeight: {
    semiBold: 600
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    nd: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px'
  }
};
