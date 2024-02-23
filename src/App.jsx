import { useRef, useState } from "react";
import { fruits as fruitsData } from "./sampleData.mjs";
import s from "./App.module.css";

function App() {
  // Using useRef for each input field
  const nameRef = useRef(null);
  const colorRef = useRef(null);
  const priceRef = useRef(null);
  const countryRef = useRef(null);
  const regionRef = useRef(null);
  const noteRef = useRef(null);

  const [fruits, setFruit] = useState(fruitsData);
  const addFruit = (newFruit) => {
    // JavaScript가 fruits가 변경되었다고 인식하기 위해서는 새로운 배열을 생성해서 변경해줘야 한다.
    // {} === {} // false
    // [] === [] // false
    setFruit([...fruits, newFruit]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: nameRef.current.value,
      color: colorRef.current.value,
      price: parseInt(priceRef.current.value, 10),
      origin: {
        country: countryRef.current.value,
        region: regionRef.current.value,
        // note: noteRef.current.value,
      },
    };

    addFruit(formData);
    // console.log(formData);
  };

  return (
    <main className={s.mainContainer}>
      <div className={s.pageButtonContainer}>
        <div className={s.appContainer}>
          <form className={s.form} onSubmit={handleSubmit}>
            <fieldset className={s.fieldset}>
              <legend>Grape Details</legend>
              <div className={s.inputWrapper}>
                <label htmlFor="name">Name</label>
                <input id="name" ref={nameRef} type="text" />
              </div>
              <div className={s.inputWrapper}>
                <label htmlFor="color">Color</label>
                <input id="color" ref={colorRef} type="text" />
              </div>
              <div className={s.inputWrapper}>
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  ref={priceRef}
                  type="number"
                  min={0}
                  max={15000}
                  step={1000}
                />
              </div>
              <div className={s.inputWrapper}>
                <label htmlFor="country">Country</label>
                <input id="country" ref={countryRef} type="text" />
              </div>
              <div className={s.inputWrapper}>
                <label htmlFor="region">Region</label>
                <input id="region" ref={regionRef} type="text" />
              </div>
              {/* <div className={s.inputWrapper}>
                <label htmlFor="note">Note:</label>
                <textarea id="note" ref={noteRef} />
              </div> */}
              <button type="submit">Submit</button>
            </fieldset>
          </form>
          <ul className={s.itemListWrapper}>
            {fruits.map((f, i) => (
              <li className={s.itemListItem} key={f.name + i}>
                <span>{f.name}</span>
                <span>{f.color}</span>
                <span>{f.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
