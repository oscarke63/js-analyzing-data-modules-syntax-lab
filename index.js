// Merges any number of username arrays and stamps the result with today's date (M/d/yyyy).
function combineUsers(...args) {
  const now = new Date();
  return {
    users: [].concat(...args),
    merge_date: `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`,
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
