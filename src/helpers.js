/* eslint-disable */
export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function validateButton(formContent) {
  const isEmailValid = validateEmail(formContent.email);
  const isPreferenceValid = (formContent.preference !== '') ? 1 : 0;
  let isSubPreferenceValid = null;
  if (!formContent.subPreferenceToggle) {
    isSubPreferenceValid = 1;
  } else {
    isSubPreferenceValid = (
      formContent.subPreferenceToggle
      && isPreferenceValid
      && formContent.subPreference !== '') ? 1 : 0;
  }
  return (isEmailValid && isPreferenceValid && isSubPreferenceValid) ? 0 : 1;
}