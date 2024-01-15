import React, { useState , useEffect } from 'react'

const inputBox = () => {
    const [label , setLabel] = useState('From')
    const [labelAnother , setLabelAnother] = useState('To')
    const [option , setOption] = useState({})
    const [to , setTo] = useState("pkr")
    const [from , setFrom] = useState("usd")
    const [amount , setAmount] = useState()
    const [calculatedAmount , setCalculatedAmount] = useState()

    const handleAmountChange = (e) => {
        // Update the amount state when the input value changes
        setAmount(e.target.value);
      };

    function getData(currency) {
        return fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
          .then(res => res.json())
          .then(data => {
            return data[currency];
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }
      
      useEffect(() => {
        getData(from).then(data => {
          setOption(data);
        });
      }, []);

      const handleCurrencyChange = (event) => {
        const selectedValue = event.target.value;
        setFrom(selectedValue);

      };

      const handleCurrencyChange2 = (event) => {
        const selectedValue = event.target.value;
        setTo(selectedValue);
      };
      
      const swap = (e) => {
        e.preventDefault()
        // Swap the labels by updating the state
        let label1 = label;
        let label2 = labelAnother;
        setLabel(label2);
        setLabelAnother(label1);

        let option1 = from;
        let option2 = to;
        setFrom(option2);
        setTo(option1);

        let amount1 = amount;
        let amount2 = calculatedAmount;
        setAmount(amount2);
        setCalculatedAmount(amount1);
      };

      async function convertCurrency() {
        try {
            const data = await getData(from);            
            const cal = amount * data[to];
            setCalculatedAmount(cal);
        } catch (error) {
            console.error('Error converting currency:', error);
        }
    }

    return (
        <>
            <form action="" className="text-center">
                <div className='bg-light row d-flex flex-row w-100 rounded p-3'>
                    <div className="col-6">
                        <label htmlFor="amount">{label}</label><br />
                        <input type="text" name='amount' value={amount} onChange={handleAmountChange} onKeyUp={convertCurrency} className='border-0 mt-3 mb-3' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="currencyType">Currency Type</label>
                        <select name="currencyType" className="form-select mt-2 mb-3" onChange={handleCurrencyChange}  value={from}>
                        {Object.keys(option).map((e) => (
                            <option key={e} value={e}>
                            {e}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
                <button className='btn btn-primary mx-auto' onClick={swap} style={{ height: '50px' }}>Swap</button>
                <div className='bg-light row d-flex flex-row w-100 rounded p-3'>
                    <div className="col-6">
                        <label htmlFor="amount">{labelAnother}</label><br />
                        <input type="text" name='amount' disabled value={calculatedAmount} className='border-0 mt-3 mb-3' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="currencyType">Currency Type</label>
                        <select name="currencyType" value={to} onChange={handleCurrencyChange2} className="form-select mt-2 mb-3">
                        {Object.keys(option).map((e) => (
                            <option key={e}>{e}</option>
                        ))}
                        </select>
                    </div>
                </div>
            </form>
        </>
    )
}

export default inputBox