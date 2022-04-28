import React, { useState } from 'react';
  
function StudentForm(props) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [condition, setCondition] = useState('');
  const [location, setLocation] = useState('');
  const [owner, setOwner] = useState('');
  const [user, setUser] = useState('');
  const [checkoutdate, setCheckoutDate] = useState('');
  const [returnbydate, setReturnByDate] = useState('');
  const [purchasedate, setPurchaseDate] = useState('');
  const [cost, setCost] = useState('');
  const [currentvalue, setCurrentValue] = useState('');
  const [schedule, setSchedule] = useState('');
  const [comments, setComments] = useState('');
  
  const changeName = (event) => {
    setName(event.target.value);
  };
  
  const changeStatus = (event) => {
    setStatus(event.target.value);
  };

  const changeCondition = (event) => {
    setCondition(event.target.value);
  };

  const changeLocation = (event) => {
    setLocation(event.target.value);
  };

  const changeOwner = (event) => {
    setOwner(event.target.value);
  };
  
  const changeUser = (event) => {
    setUser(event.target.value);
  };
  
  const changeCheckoutDate = (event) => {
    setCheckoutDate(event.target.value);
  };
  
  const changeReturnByDate = (event) => {
    setReturnByDate(event.target.value);
  };
  
  const changePurchaseDate = (event) => {
    setPurchaseDate(event.target.value);
  };
  
  const changeCost = (event) => {
    setCost(event.target.value);
  };
  
  const changeCurrentValue = (event) => {
    setCurrentValue(event.target.value);
  };
  
  const changeSchedule = (event) => {
    setSchedule(event.target.value);
  };
  
  const changeComments = (event) => {
    setComments(event.target.value);
  };
  
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      status,
      condition,
      location,
      owner,
      user,
      checkoutdate,
      returnbydate,
      purchasedate,
      cost,
      currentvalue,
      schedule,
      comments,
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setName('');
    setStatus('');
    setCondition('');
    setLocation('');
    setOwner('');
    setUser('');
    setCheckoutDate('');
    setReturnByDate('');
    setPurchaseDate('');
    setCost('');
    setCurrentValue('');
    setSchedule('');
    setComments('');
  };
  
  return (
    <div>
      <label>Name</label>
      <input type="text" value={name} onChange={changeName} />

      <label>Status</label>
      <input type="text" value={status} onChange={changeStatus} />

      <label>Condition</label>
      <input type="text" value={condition} onChange={changeCondition} />

      <label>Location</label>
      <input type="text" value={location} onChange={changeLocation} />

      <label>Owner</label>
      <input type="text" value={owner} onChange={changeOwner} />

      <label>User</label>
      <input type="text" value={user} onChange={changeUser} />

      <label>Checkout Date</label>
      <input type="text" value={checkoutdate} onChange={changeCheckoutDate} />

      <label>Return-By Date</label>
      <input type="text" value={returnbydate} onChange={changeReturnByDate} />

      <label>Purchase Date</label>
      <input type="text" value={purchasedate} onChange={changePurchaseDate} />

      <label>Cost</label>
      <input type="text" value={cost} onChange={changeCost} />

      <label>Current Value</label>
      <input type="text" value={currentvalue} onChange={changeCurrentValue} />

      <label>Schedule</label>
      <input type="text" value={schedule} onChange={changeSchedule} />

      <label>Comments</label>
      <input type="text" value={comments} onChange={changeComments} />

      <button onClick={transferValue}> Log Item</button>
    </div>
  );
}
  
export default StudentForm;