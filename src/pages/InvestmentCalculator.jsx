import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [currentAmount, setCurrentAmount] = useState('');
  const [monthlyAmount, setMonthlyAmount] = useState('');
  const [roiPercentage, setRoiPercentage] = useState('');
  const [annualRoi, setAnnualRoi] = useState(0);
  const [monthlyRoi, setMonthlyRoi] = useState(0);
  const [dailyRoi, setDailyRoi] = useState(0);
  const [currencyCode, setCurrencyCode] = useState('');

  const currencyCodes = ['SGD', 'MYR', 'AUD', 'USD', 'GBP'];

  const calculateRoi = () => {
    const currentAmountFloat = parseFloat(currentAmount);
    const monthlyAmountFloat = parseFloat(monthlyAmount);
    const roiPercentageFloat = parseFloat(roiPercentage);

    const totalAmount = currentAmountFloat + (monthlyAmountFloat * 12)
    const annualRoiValue = (totalAmount * (roiPercentageFloat / 100)).toFixed(2);
    const monthlyRoiValue = (totalAmount * (roiPercentageFloat / 100 / 12)).toFixed(2);
    const dailyRoiValue = (totalAmount * (roiPercentageFloat / 100 / 365)).toFixed(2);

    let currencySymbol = ''
    switch(currencyCode) {
      case 'GBP':
        currencySymbol = '£';
        break;
      case 'MYR': 
        currencySymbol = 'RM';
        break;
      default:
        currencySymbol = '$';
        break;
    }

    const formattedAnnualRoi = `${currencySymbol}${annualRoiValue}`;
    const formattedMonthlyRoi = `${currencySymbol}${monthlyRoiValue}`;
    const formattedDailyRoi = `${currencySymbol}${dailyRoiValue}`;

    setAnnualRoi(formattedAnnualRoi);
    setMonthlyRoi(formattedMonthlyRoi);
    setDailyRoi(formattedDailyRoi);
  };

  return (

    <div className="min-h-screen flex flex-col items-center bg-white text-slate-400 p-4">
      <h1 className="text-2xl font-bold">Investment Calculator</h1>
      <div className="p-8 flex flex-wrap w-full items-start">
        <div id="roiInput" className="mt-4 mb-4 mr-8 ml-8 flex-1">
          <div className="mt-5">
            <label className="mb-2">Currency:</label>
            <select className="border border-slate-400 p-2 w-full rounded" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}>
              {currencyCodes.map(symbol => (
                <option key={symbol} value={symbol}>{symbol}</option>
              ))}
            </select>
          </div>
          <div className="mt-5">
            <label className="mb-2">Amount at Beginning of Year:</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} />
          </div>
          <div className="mt-5">
            <label className="mb-2">Amount Added Monthly:</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={monthlyAmount} onChange={(e) => setMonthlyAmount(e.target.value)} />
          </div>
          <div className="mt-5">
            <label className="mb-2">Expected ROI in %:</label>
            <input className="border border-slate-400 p-2 w-full rounded" type="number" value={roiPercentage} onChange={(e) => setRoiPercentage(e.target.value)} />
          </div>

          <button className="bg-blue-500 mx-auto text-white px-4 py-2 rounded hover:bg-blue-600 mt-12 mb-5 " onClick={calculateRoi}>Calculate Potential ROI</button>
        </div>
        <div id="roiResults" className="bg-slate-400 rounded p-4 mb-4 mt-4 mr-8 ml-8 text-white flex-1">
          <p className="mt-5">Annual ROI:</p>
          <p className="mb-5 font-bold">{annualRoi}</p>
          <p>Monthly ROI:</p>
          <p className="mb-5 font-bold">{monthlyRoi}</p>
          <p>Daily ROI:</p>
          <p className="mb-5 font-bold">{dailyRoi}</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;