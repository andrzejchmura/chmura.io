const root = document.documentElement;

export const theme = {
  mode: "light",
  toggle: function toggle() {
    if (this.mode === "light") {
      this.dark();
      this.mode = "dark";
    } else {
      this.light();
      this.mode = "light";
    }
  },
  light: () => {
    setTimeout(() => {
      root.style.setProperty("--bg", "#ffffff");
      root.style.setProperty("--fg-high", "#24292E");
      root.style.setProperty("--fg-medium", "#bababa");
      root.style.setProperty("--fg-low", "#ebebeb");
      root.style.setProperty("--primary", "#0076FF");
    }, 10);
  },
  dark: () => {
    setTimeout(() => {
      root.style.setProperty("--bg", "#24292E");
      root.style.setProperty("--fg-high", "#ffffff");
      root.style.setProperty("--fg-medium", "#bababa");
      root.style.setProperty("--fg-low", "#666666");
      root.style.setProperty("--primary", "#ffffff");
    }, 10);
  }
};