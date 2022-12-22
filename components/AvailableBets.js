import { useState, useContext, useEffect } from "react";
const styles = {
  button:
    "rounded-lg py-2 px-5 text-[#ffffff] text-xs border-[#30363b] bg-[#1E2123] border",
  availableBetsContainer: "flex flex-col mt-4 border-t border-[#30363b] pt-2",
  availableBetsTitle: "text-[#ffffff] font-bolder text-lg ",
  noAvailableBetsTitle: "text-[#ef4b09] font-bold text-sm ",
  availableBetsItem:
    "flex flex-row justify-between items-center border-b border-[#30363b] pb-2",
  currentStockPrice: "flex flex-col justify-center items-center",
  currentStockPriceTitle: "text-[8px] text-[#ffffff] mt-4",
  currentStockPriceAmount: "text-lg text-[#ffffff]",
};

export default function AvailableBets({
  availableStock,
  setSelectedBet,
  setShowModal,
}) {
  return (
    <div className={styles.availableBetsContainer}>
      <p className={styles.availableBetsTitle}>Available Bets</p>
      {availableStock.map((item) => {
        return (
          <div
          key={item.stockName}
            className={styles.availableBetsItem}
            onClick={() => {
              setSelectedBet(item);
              setShowModal(true);
            }}
          >
            <p className={styles.availableBetsTitle}>{item.stockName}</p>
            <div className={styles.currentStockPrice}>
              <p className={styles.currentStockPriceTitle}>
                CURRENT POT AMOUNT
              </p>
              <p className={styles.currentStockPriceAmount}>{item.sol} SOL</p>
            </div>
            <div className={`${styles.button}${item.high && " bg-[#00ff1a]"}`}>
              HIGH
            </div>
            <div className={`${styles.button}${item.low && " bg-[#ef4b09]"}`}>
              LOW
            </div>
          </div>
        );
      })}
      {availableStock.length === 0 && (
        <p className={styles.noAvailableBetsTitle}>No Available Bets</p>
      )}
    </div>
  );
}
