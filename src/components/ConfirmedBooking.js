import { useLocation } from "react-router-dom";
export const ConfirmedBooking = () => {

    const location = useLocation();
    const { date, time, guest, occasion } = location.state.reservationData;
    




    return (
        <>
        <h1>Reservation Confirmed</h1>
        <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number of guests: {guest}</p>
      <p>Occasion: {occasion}</p>
      </>  
    )
}

