export default async function handleSubmitUser(
  data,
  formConfig,
  postFn,
  setPostStatus
) {
  // remove excluded fields (password-confirm) from form data prior to submit
  const filteredData = {};
  formConfig.forEach(({ name, excludeFromPost }) => {
    if (!excludeFromPost) {
      filteredData[name] = data[name].trim(); // quietly trim w/o bothering user
    }
  });

  return postFn(filteredData, setPostStatus);
}
