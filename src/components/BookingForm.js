
const BookingForm = (props) => {
    const { formState, handleInputChange, handleDateChange } = props;
    const { availableTimes } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission here
      console.log({ formState });
    };
  
    return (
      <>
        <div className="singleContainer">
          <form className="form" onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="res-date">Choose date</label>
              <input
                className="inputFeilds"
                type="date"
                id="res-date"
                name="date"
                value={formState.date}
                onChange={(e) => handleDateChange(e)}
              />
            </div>
            
            <div>
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time "
                name="time"
                value={formState.time}
                onChange={(e) => handleInputChange(e)}
                className="inputFeilds"
              >
                {availableTimes.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </div>
  
            <div>
              <label htmlFor="guests">Number of guests</label>
              <input
                className="inputFeilds" type="number" placeholder="1" min="1" max="10" id="guests" name="guest" value={formState.guest} onChange={(e) => handleInputChange(e)} />
            </div>
   
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" className="inputFeilds" name="occasion" value={formState.occasion} onChange={(e) => handleInputChange(e)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <button type="submit">Make Your reservation</button> 
</form>
</div>
        </>
    )
}
export default BookingForm