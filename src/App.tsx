import { Button } from 'react-aria-components';

function App() {
  return (
    <div className="p-5">
      <div className="text-3xl font-bold">Hello Vite</div>
      <Button
        onPress={() => alert('tested work')}
        className="my-4 outline-none bg-blue-600 px-3 py-1 hover:bg-blue-500 text-white rounded-md border-transparent"
      >
        Tested
      </Button>
    </div>
  );
}

export default App;
