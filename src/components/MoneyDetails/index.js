import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
<<<<<<< HEAD
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="details-img"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
=======
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" className="details-img" />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid = "balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="income-container">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income" className="details-img"/>
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses" className="details-img"/>
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">Rs {expensesAmount}</p>
>>>>>>> e146e6b4c9e431d055b4de6ad1d97848935aefa0
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
