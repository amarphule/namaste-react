const searchFilter = (text, list) => {
  return list.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
};

export { searchFilter };
