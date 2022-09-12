import './App.css';

function App() {
  return (
    <div className="App">
      <div className='calculator'>
        <section className='left-section'>
          <div className='bill'>
            <h4>Bill</h4>
            <input placeholder='0'/>
          </div>

          <div className='select-Tip'>
            <div>
              <h4>Select Tip %</h4>
            </div>
            <div className='buttons'>
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <input placeholder='CUSTOM'/>
            </div>
          </div>
            <div>
              <h4>Number of People</h4>
              <input placeholder='0'/>
            </div>
          <div className='numberOFPeople'></div>
        </section>
        <section className='screen'>
          <div className='tipAmount'>
            <div>
              <h4>Tip Amount</h4>
              <h5>/person</h5>
            </div>
            <h1>$0.00</h1>
          </div>
          <div className='total'>
            <div>
              <h4>Total</h4>
              <h5>/person</h5>
            </div>
            <h1>$0.00</h1>
          </div>
          <button className='reset'>RESET</button>
        </section>
      </div>
    </div>
  );
}

export default App;
