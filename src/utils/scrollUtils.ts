export const scrollIntoView = (path: string) => {
  const element = document.getElementById(path);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
