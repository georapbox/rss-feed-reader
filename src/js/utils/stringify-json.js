export const stringifyJSON = (obj, space) => {
  let res = '';

  try {
    res = JSON.stringify(obj, null, space);
  } catch (err) {
    console.error(err);
  }

  return res;
};
