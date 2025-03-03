document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme-select");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme") || "monokai";
  setTheme(savedTheme);
  themeSelect.value = savedTheme;

  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });

  function setTheme(theme) {
    body.classList.remove("theme-monokai", "theme-solarized", "theme-light");
    body.classList.add(`theme-${theme}`);
  }
});
