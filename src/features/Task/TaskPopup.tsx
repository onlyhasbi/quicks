import Card from '../../components/Card';
import TaskContainer from './TaskContainer';
import TaskNavbar from './TaskNavbar';

function TaskPopup() {
  return (
    <Card className="px-7">
      <TaskNavbar />
      <TaskContainer />
    </Card>
  );
}

export default TaskPopup;
