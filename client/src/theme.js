// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f9f9f9", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // black
        100: "#d9d9d9",
        200: "#b3b3b3",
        300: "#8c8c8c",
        400: "#666666",
        500: "#404040",
        600: "#333333",
        700: "#262626",
        800: "#1a1a1a",
        900: "#0d0d0d"
  },
  secondary: {
    //teal: 
        100: "#d7edf9",
        200: "#aedcf3",
        300: "#86caec",
        400: "#5db9e6",
        500: "#35a7e0",
        600: "#2a86b3",
        700: "#206486",
        800: "#15435a",
        900: "#0b212d"
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              dark: tokensDark.grey[200],
              main: tokensDark.grey[50],
              light: tokensDark.grey[0],
            },
            secondary: {
              ...tokensDark.secondary,
              dark: tokensDark.secondary[700],
              main: tokensDark.secondary[500],
              light: tokensDark.secondary[400],
            },
            neutral: {
              ...tokensDark.grey,
              dark: tokensDark.primary[300],
              main: tokensDark.primary[200],
              light: tokensDark.primary[100],
            },
            background: {
              dark: tokensDark.grey[1000],
              default: tokensDark.grey[800],
              alt: tokensDark.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensDark.primary,
              dark: tokensDark.grey[500],
              main: tokensDark.grey[800],
              light: tokensDark.grey[900],
            },
            secondary: {
              ...tokensDark.secondary,
              dark: tokensDark.secondary[400],
              main: tokensDark.secondary[200],
              light: tokensDark.secondary[100],
            },
            neutral: {
              ...tokensDark.grey,
              dark: tokensDark.primary[500],
              main: tokensDark.primary[600],
              light: tokensDark.primary[700],
            },
            background: {
              dark: tokensDark.grey[0],
              default: tokensDark.grey[50],
              alt: tokensDark.grey[10],
            },
            }
          ),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
