import TextEditor from "./TextEditor";

const App = () => {
  function printHandler() {
    window.print();
  }

  return (
    <>
      <TextEditor />
      <button className="print-btn" onClick={printHandler}>
        Print
      </button>
    </>
  );
};

export default App;
