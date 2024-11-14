const tintColorLight = '#1d60d7';
const tintColorDark = '#1b6ce8';

export const Colors = {
  light: {
    primary: '#1d60d7',          // Main brand color used for accents and buttons
    secondary: '#78abec',        // Secondary brand color for some UI elements
    background: '#f1f6ff',       // Main background color
    foreground: '#4e5155',       // Slightly darker background for cards and components
    text: '#0c0c10',             // Main text color for readability
    textGray: '#687076',         // Subtle gray text for less important info
    green: '#266c51',            // Positive indicators, like growth percentages
    error: '#f2312f',            // Error or negative indicators
    tint: tintColorLight,        // Tint color for highlighted icons and text
    icon: '#687076',             // Default icon color
    tabIconDefault: '#687076',   // Unselected tab icon color
    tabIconSelected: tintColorLight, // Selected tab icon color
  },
  dark: {
    primary: '#1b6ce8',
    secondary: '#0D47A1',
    background: '#020f22',       // Dark background color
    foreground: '#605f5f',       // Slightly lighter dark background for cards
    text: '#f6f6f7',             // Light text color for readability
    textGray: '#9BA1A6',         // Subtle gray text for less important info
    green: '#266c51',            // Positive indicators
    error: '#f2312f',            // Error color with a bit more brightness for dark mode
    tint: tintColorDark,         // Tint color for highlighted icons and text
    icon: '#bfbfbf',             // Default icon color for dark mode
    tabIconDefault: '#bfbfbf',   // Unselected tab icon color
    tabIconSelected: tintColorDark, // Selected tab icon color
  },
};