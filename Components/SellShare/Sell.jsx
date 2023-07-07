import React, { useState } from 'react';
import styles from './SellShares.module.css';

const Sell = () => {
  const [shareOption, setShareOption] = useState('');
  const [sellIndex, setSellIndex] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');

  const handleSellShares = () => {
    // Perform the necessary logic for selling shares
    // You can access the input values using the state variables
    console.log('Share option:', shareOption);
    console.log('Sell index:', sellIndex);
    console.log('Sell amount:', sellAmount);
    console.log('Current price:', currentPrice);
    console.log('Exchange rate:', exchangeRate);

    // Reset the input fields after selling shares
    setShareOption('');
    setSellIndex('');
    setSellAmount('');
    setCurrentPrice('');
    setExchangeRate('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sell Shares</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="shareOption">Share Option:</label>
        <select
          id="shareOption"
          value={shareOption}
          onChange={(e) => setShareOption(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="sellIndex">Index:</label>
        <input
className="InputSection"          type="text"
          id="sellIndex"
          value={sellIndex}
          onChange={(e) => setSellIndex(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="sellAmount">Sell Amount:</label>
        <input
   className="InputSection"       type="text"
          id="sellAmount"
          value={sellAmount}
          onChange={(e) => setSellAmount(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="currentPrice">Current Price:</label>
        <input
   className="InputSection"       type="text"
          id="currentPrice"
          value={currentPrice}
          onChange={(e) => setCurrentPrice(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="exchangeRate">Exchange Rate:</label>
        <input
  className="InputSection"        type="text"
          id="exchangeRate"
          value={exchangeRate}
          onChange={(e) => setExchangeRate(e.target.value)}
        />
      </div>
      <button className={styles.sellButton} onClick={handleSellShares}>
        Sell
      </button>
    </div>
  );
};
export default Sell;


