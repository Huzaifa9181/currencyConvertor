import React, { useState , useEffect } from 'react'

const inputBox = ({label , labelAnother}) => {
    const [option , setOption] = useState({})
    const [from , setFrom] = useState("usd")

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
        getData('usd').then(data => {
          setOption(data);
        });
      }, []);

      const handleCurrencyChange = (event) => {
        const selectedValue = event.target.value;
        setFrom(selectedValue);
        console.log(from)
      };
      
    return (
        <>
            <form action="" className="text-center">
                <div className='bg-light row d-flex flex-row w-100 rounded p-3'>
                    <div className="col-6">
                        <label htmlFor="amount">{label}</label><br />
                        <input type="text" name='amount' defaultValue={0} className='border-0 mt-3 mb-3' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="currencyType">Currency Type</label>
                        <select name="currencyType" className="form-select mt-2 mb-3" onChange={handleCurrencyChange} value={from}>
                        {Object.keys(option).map((e) => (
                            <option key={e} value={e}>
                            {e}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
                <button className='btn btn-primary mx-auto' style={{ height: '50px' }}>Swap</button>
                <div className='bg-light row d-flex flex-row w-100 rounded p-3'>
                    <div className="col-6">
                        <label htmlFor="amount">{labelAnother}</label><br />
                        <input type="text" name='amount' disabled defaultValue={0} className='border-0 mt-3 mb-3' />
                    </div>
                    <div className="col-6">
                        <label htmlFor="currencyType">Currency Type</label>
                        <select name="currencyType" className="form-select mt-2 mb-3">
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