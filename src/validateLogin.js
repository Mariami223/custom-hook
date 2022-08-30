export default function validateLogin(values) {
  const errors = {};
  if (values.firstName && values.firstName.length < 4) {
    errors.firstName = "firstName should have at least 4 charachters";
  }
  if (values.lastName && values.lastName.length < 4) {
    errors.lastName = "lastName should have at least 4 charachters";
  }

  if (values.email && !values.email.includes("@")) {
    errors.email = "email should include @ ";
  }

  if (values.password && values.password.length < 6) {
    errors.password = "Password needs to be more than 6 characters";
  }

  return errors;
}
