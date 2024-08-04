export const THEME = {
    colors: {
        primary: '#c83737',
        primaryLight: '#e04f4f',
        primaryDark: '#822424',
        dark100: '#333333',
        dark200: '#282828',
        dark300: '#1a1a1a',
        white: '#ffffff',
    },
    spacing: {
        s1: '8px',
        s2: '16px',
        s3: '32px',
        s4: '64px',
        s5: '128px',
    },
    fonts: {
        text: 'rockwell',
    },
    fontSize: {
        s1: '12px',
        s2: '16px',
        s3: '24px',
        s4: '32px',
        s5: '64px',
    },
    header: {
        height: 80,
        heightExpanded: 150,
    },
    breakpoints : {
        m: '1500px',
        s: '800px',
        xs: '600px',
    }
} as const;

export const mediaQuery = (breakpoint: typeof THEME.breakpoints[keyof typeof THEME.breakpoints]) => {
    return `(max-width: ${breakpoint})`
}
