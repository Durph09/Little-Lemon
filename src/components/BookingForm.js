
const BookingForm = (props) => {
    const { formState, handleInputChange, handleDateChange, submitForm } = props;
    const { availableTimes } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission here
      submitForm(formState)
    };
    const placeHolderDate = formState.date ? new Date(formState.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }) : '';

      const minResDate = new Date();
const isoMinResDate = minResDate.toISOString().slice(0, 10);


  console.log(`place holder date ${placeHolderDate}`)
    return (
      <>
        <div className="singleContainer">
          <form className="form" onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="res-date">Choose date</label>
              <input
                className="inputFeilds"
                placeholder={placeHolderDate}
                type="date"
                min={isoMinResDate}
                id="res-date"
                name="date"
                value={formState.date}
                onChange={(e) => {handleDateChange(e); handleInputChange(e)}}
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
                    <option>Special Night Out</option>
                    
                </select>
            </div>
            <button type="submit" onSubmit={handleSubmit} >Make Your reservation</button> 
</form>
</div>
        </>
    )
}
export default BookingForm