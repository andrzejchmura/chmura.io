let root;
if (typeof document !== "undefined") {
  root = document.documentElement;
} else {
  root = {};
}

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
      root.style.setProperty("--fg-medium", "#5a5a5a");
      root.style.setProperty("--fg-low", "#ebebeb");
    }, 10);
  },
  dark: () => {
    setTimeout(() => {
      root.style.setProperty("--bg", "#000000");
      root.style.setProperty("--fg-high", "#ffffff");
      root.style.setProperty("--fg-medium", "#bababa");
      root.style.setProperty("--fg-low", "#666666");
    }, 10);
  }
};
