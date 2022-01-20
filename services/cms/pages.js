export const pageFilter = (data, pageTitle) => {
  const content = data.items.map((d) => {
    if (d.title === pageTitle) {
      return d;
    }
  });

  const filtered = content.filter((x) => {
    if (x !== undefined) {
      return x;
    }
  });

  return filtered;
};
