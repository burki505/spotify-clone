export const validate = (type, value) => {
  let validation = false;

  if (value.trim().length > 0) {
    switch (type) {
      case "email":
        validation = value.trim().includes("@") && value.trim().length > 0;
            break

      case "text":
        validation = value.trim().length > 0;
            break

      case "password":
        validation = value.trim().length > 5;
            break
      default:
        validation = !!value;
            break
    }
  }
  return validation;
};
