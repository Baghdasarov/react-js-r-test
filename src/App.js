import { CheckAnagram, CheckPalindrome, CheckFibonacciSequence } from 'components';

import './App.css';

function App() {
  return (
    <div className="App h-full px-10 py-14 bg-blue-50 grid grid-flow-col gap-4">
      <CheckAnagram />
      <CheckPalindrome />
      <CheckFibonacciSequence />
    </div>
  );
}

export default App;
