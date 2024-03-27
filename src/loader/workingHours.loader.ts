export function currentWorkingHourLoader() {
  const currentworkingHour = localStorage.getItem("workingHour");

  let result = {};

  if (currentworkingHour) {
    result = JSON.parse(currentworkingHour);
  }

  return { result };
}
