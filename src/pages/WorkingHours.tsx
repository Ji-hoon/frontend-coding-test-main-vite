import { useLoaderData } from "react-router-dom";
import Setting_Page from "../components_workingHour/Setting.page";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps, WorkingHourType } from "../global/types";
import { workingHourActions } from "../store/workingHour.slice";

export type workingOurLoaderType = {
  result: WorkingHourType[];
};

function WorkingHours() {
  const dispatch = useDispatch();
  const { hours, isSyncedWithLocalStorage } = useSelector(
    (state: StoreProps) => state.workingHour
  );
  const { result } = useLoaderData() as workingOurLoaderType;

  console.log(result);
  if (Object.keys(result).length === 0 && !isSyncedWithLocalStorage) {
    localStorage.setItem("workingHour", JSON.stringify(hours));
    dispatch(workingHourActions.setSync());
  }

  if (Object.keys(result).length > 0 && !isSyncedWithLocalStorage) {
    dispatch(workingHourActions.setHours({ hours: result }));
    console.log("synced");
  }

  return (
    <>
      <h2>2번 과제 - WorkingHours</h2>
      <Setting_Page hours={hours} />
    </>
  );
}

export default WorkingHours;
