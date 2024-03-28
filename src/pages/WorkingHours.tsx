import { useLoaderData } from "react-router-dom";
import Setting_Page from "../components_workingHour/Setting.page";
import { useDispatch, useSelector } from "react-redux";
import { StoreProps, WorkingHourType } from "../global/types";
import { workingHourActions } from "../store/workingHour.slice";
import { useEffect } from "react";
import Dropdown from "../components_workingHour/modules/Dropdown";
import Dropdown_TimeOption from "../components_workingHour/modules/Dropdown.timeoption";

export type workingOurLoaderType = {
  result: WorkingHourType[];
};

function WorkingHours() {
  const dispatch = useDispatch();

  const { hours, isSyncedWithLocalStorage, isDropdownOpen, selectedTime } =
    useSelector((state: StoreProps) => state.workingHour);
  const { result } = useLoaderData() as workingOurLoaderType;

  useEffect(() => {
    if (Object.keys(result).length === 0 && !isSyncedWithLocalStorage) {
      localStorage.setItem("workingHour", JSON.stringify(hours));
      dispatch(workingHourActions.setSync());
    }

    if (Object.keys(result).length > 0 && !isSyncedWithLocalStorage) {
      dispatch(workingHourActions.setHours({ hours: result }));
      console.log("synced");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 style={{ maxWidth: "960px" }}>Set your weekly hours</h2>
      {isSyncedWithLocalStorage && <Setting_Page hours={hours} />}
      {selectedTime && isDropdownOpen && (
        <Dropdown isEnabled={isDropdownOpen}>
          <Dropdown_TimeOption selected={selectedTime} />
        </Dropdown>
      )}
    </>
  );
}

export default WorkingHours;
