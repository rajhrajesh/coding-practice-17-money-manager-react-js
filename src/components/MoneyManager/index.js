import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
<<<<<<< HEAD
import './index.css'
=======
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

<<<<<<< HEAD
=======
import './index.css'
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const updatedTransactionList = transactionList.filter(
<<<<<<< HEAD
      eachTransaction => id !== eachTransaction.id,
    )

=======
      eachTransc => id !== eachTransc.id,
    )
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
<<<<<<< HEAD
      eachTransaction => eachTransaction.optionId === optionId,
=======
      eachTransc => eachTransc.optionId === optionId,
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
    )

    const {displayText} = typeOption
    const newTransc = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransc],
      amountInput: '',
      titleInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

<<<<<<< HEAD
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
=======
    transactionList.forEach(eachTransc => {
      if (eachTransc.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransc.amount
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
<<<<<<< HEAD

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
=======
    transactionList.forEach(eachTransc => {
      if (eachTransc.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransc.amount
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
<<<<<<< HEAD

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
=======
    transactionList.forEach(eachTransc => {
      if (eachTransc.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransc.amount
      } else {
        expensesAmount += eachTransc.amount
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="header-content">
              Welcome back to your{' '}
              <span className="money-manager-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="transaction-details">
<<<<<<< HEAD
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
=======
            <form className="transaction-from" onSubmit={this.onAddTransaction}>
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
              <h1 className="transaction-header">Add Transaction</h1>
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                className="input"
                placeholder="TITLE"
                onChange={this.onChangeTitleInput}
              />
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                className="input"
                value={amountInput}
                placeholder="AMOUNT"
                id="amount"
                onChange={this.onChangeAmountInput}
              />
<<<<<<< HEAD
              <label className="input-name-type" htmlFor="select">
=======
              <label className="label" htmlFor="select">
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
<<<<<<< HEAD
                {transactionTypeOptions.map(eachTransaction => (
                  <option
                    key={eachTransaction.optionId}
                    value={eachTransaction.optionId}
                  >
                    {eachTransaction.displayText}
                  </option>
                ))}
              </select>
              <button className="sub-button" type="submit">
=======
                {transactionTypeOptions.map(eachTransc => (
                  <option key={eachTransc.optionId} value={eachTransc.optionId}>
                    {eachTransc.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>
              <div className="transactions-table-container">
                <ul className="transactions-table">
<<<<<<< HEAD
                  <li className="table-header-row">
=======
                  <li className="table-header">
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
<<<<<<< HEAD
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
=======
                  {transactionList.map(eachTransc => (
                    <TransactionItem
                      key={eachTransc.id}
                      transactionDetails={eachTransc}
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
                      deleteTransaction={this.deleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
<<<<<<< HEAD

=======
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
export default MoneyManager
