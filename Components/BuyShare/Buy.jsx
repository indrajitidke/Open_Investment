import React, { useState } from 'react';
import styles from './BuyShare.module.css';

const Buy = () => {
  const [buyAmount, setBuyAmount] = useState('');
  const [sharePrice, setSharePrice] = useState('');
  const [shareOption, setShareOption] = useState('');
  const [exchangeRange, setExchangeRange] = useState('');

  const handleBuyShare = () => {
    // Perform the necessary logic for buying shares
    // You can access the input values using the state variables
    console.log('Buy amount:', buyAmount);
    console.log('Share price:', sharePrice);
    console.log('Share option:', shareOption);
    console.log('Exchange range:', exchangeRange);

    // Reset the input fields after buying shares
    setBuyAmount('');
    setSharePrice('');
    setShareOption('');
    setExchangeRange('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Buy Share</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="buyAmount">Buy Amount:</label>
        <input
          type="text"
          id="buyAmount"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="sharePrice">Share Price:</label>
        <input
          type="text"
          id="sharePrice"
          value={sharePrice}
          onChange={(e) => setSharePrice(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="shareOption">Share Option:</label>
        <input
          type="text"
          id="shareOption"
          value={shareOption}
          onChange={(e) => setShareOption(e.target.value)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="exchangeRange">Exchange Range:</label>
        <input
          type="text"
          id="exchangeRange"
          value={exchangeRange}
          onChange={(e) => setExchangeRange(e.target.value)}
        />
      </div>
      <button className={styles.buyButton} onClick={handleBuyShare}>
        Buy Share
      </button>
    </div>
  );
};

export default Buy;
