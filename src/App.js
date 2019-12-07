import React from 'react';
import './App.css';
import styled from 'styled-components';

const Fieldset = styled.form`
  width: 60%;
  min-width: 300px;
  margin: 0 auto;
  background-color: ghostwhite;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 2vh;
  text-align: left;
`

const FormItem = styled.p`
  display: grid;
`

const RadioChoices = styled.p`
  display: grid;
`

const Legend = styled.legend`
  font-size: 20px;
  font-weight: 700;
`

const AnnualIncome = () => (
  <RadioChoices>
  <p>
    <input type="radio" name="income" id="manual-annual"/>
    <label for="manual-annual">Manually enter annual income</label>
    <br />
    <input type="radio" name="income" id="calculated-hourly"/>
    <label for="calculated-hourly">Calculate annual income from hourly wage</label>
  </p>
</RadioChoices>
)

const CheckingSavings = () => (
  <>
    <FormItem>
      <label for="checking">How much money do you have in checking accounts?</label>
      <input name="checking" id="checking" />
    </FormItem>
    <FormItem>
        <label for="savings">How much money do you have in savings accounts?</label>
        <input name="savings" id="savings" />
    </FormItem>
  </>
)

const StockMarket = () => (
  <FormItem>
    <label for="stocks">How much money do you have in stocks, ETFs, and mutual funds?</label>
    <input name="stocks" id="stocks" />
  </FormItem>
)


const Calculator = () => (
  <form>
    <Fieldset>
      <Legend>Retirement Planning Calculator</Legend>
      <FormItem>
        <label for="age">What is your age?</label>
        <input name="age" id="age" />
      </FormItem>

      <AnnualIncome />

      <FormItem>
        <label for="retire-age">What is your goal retirement age?</label>
        <input name="retire-age" id="retire-age" />
      </FormItem>

      <CheckingSavings />
      <StockMarket />

    </Fieldset>

  </form>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How F****ed am I?</h1>
      </header>
      <p>
        How much should you be saving each month for retirement?
      </p>
    <Calculator />
    </div>
  );
}

export default App;
