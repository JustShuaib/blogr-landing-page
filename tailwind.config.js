module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      spacing: {
        120: "40rem",
      },
      borderRadius: {
        50: "80px",
      },
      fontFamily: {
        overpass: "Overpass, sans-serif",
        ubuntu: "Ubuntu, sans-serif",
      },
      colors: {
        // Primary colors

        "test-color": "hsl(275, 100%, 27%)",
        "light-red-cta": "hsl(356, 100%, 66%)",
        "very-light-red": "hsl(355, 100%, 74%)",
        "headings-blue": "hsl(208, 49%, 24%)",
        // Neutral
        "white-text": "hsl(0, 0%, 100%)",
        "footer-blue": "hsl(240, 2%, 79%)",
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "footer-background": "hsl(240, 10%, 16%)",
        // Gradient
        "very-light-red": "hsl(13, 100%, 72%)",
        "light-red": "hsl(353, 100%, 62%)",
        // Body gradient
        "very-dark-blue": " hsl(237, 17%, 21%)",
        "very-dark-saturated-blue": "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg-pattern-intro-mobile.svg')",
        "desktop-bg": "url('/images/bg-pattern-intro-desktop.svg')",
      },
    },
    plugins: [],
  },
};
