import e from "express";
import { useState } from "react"

const BookingForm = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion]= useState("")

    const [availableTimes, setAvailableTimes] = useState(['17:00','18:00', '19:00', '20:00', '21:00', '22:00']);

    const handleChange= e => {
        switch (e.target.id) {
            case 'res-date':
                setDate(e.target.value);
                break;
            case 'res-time':
                setTime(e.target.value) ;
                break;
            case 'number':
                setGuests(e.target.value);
                break;
            case 'occasion':
                setOccasion(e.target.value);
                break;
            default:
        }
    }

    const handleSubmit = () => console.log('submitted')

    return(
        <>
        
        <form style={{display: 'grid',justifyContent: 'center', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
   <label htmlFo="res-date" >Choose date</label>
   <input type="date" id="res-date" onChange={handleChange} />
   <label htmlFo="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" />
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" />
</form>

        </>
    )
}
export default BookingForm