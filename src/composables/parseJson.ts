export const parseJson = (dataset: string, fallback: any, errorLabel: string = "") => {
  try {
    return JSON.parse(dataset);
  } catch (error) {
    console.warn(`Cookie Consent: Error while parsing ${errorLabel ? errorLabel: 'json'}.`);
    return fallback;
  }
}