import Collapse from '../../components/Collapse';
import DatePickerAria from '../../components/Date';
import scheduleIcon from '../../assets/icon/schedule.svg';
// import scheduleActiveIcon from '../../assets/icon/schedule_active.svg';
import pencilIcon from '../../assets/icon/pencil.svg';
// import pencilActiveIcon from '../../assets/icon/pencil_active.svg';

function TaskContainer() {
  return (
    <Collapse title="Cross-reference with Jeanne for Case #192813">
      <div className="flex flex-col gap-3 ml-6">
        <span className="flex items-center space-x-3">
          <img src={scheduleIcon} alt="schedule-icon" className="px-1" />
          <DatePickerAria />
        </span>
        <span className="flex items-center space-x-3">
          <img src={pencilIcon} alt="pencil-icon" className="px-[.3rem]" />
          <p className="text-primary-darkgray">No Description</p>
        </span>
      </div>
    </Collapse>
  );
}

export default TaskContainer;
