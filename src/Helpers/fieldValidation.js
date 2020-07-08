const fieldValidation = (data) => {
  const fields = [];

  if (!data.name) fields.push('Name');
  if (!data.subject) fields.push('Subject');
  if (!data.type) fields.push('Type');
  if (!data.value) fields.push('Value');

  return fields;
};

export { fieldValidation };
