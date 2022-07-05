export function checkPassword(control: any) {
  let enteredPassword = control.value
  let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
}
