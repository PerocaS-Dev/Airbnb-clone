import { useEffect} from "react";
import Footer from "../components/shared_components/Footer";
import { useAuthContext } from "../context/AuthContext";
import { useReservationContext } from "../context/ReservationContext";
import Admin_Buttons from "../components/shared_components/Admin_Buttons";
import "./Reserved.css";

const Reserved = () => {
  const { user } = useAuthContext();
  const { reservations, dispatch } = useReservationContext();

  useEffect(() => {
    const fetchReservations = async () => {
      const endpoint = user?.isHost
        ? `${process.env.REACT_APP_API_BASE_URL}/api/reservations/host`
        : `${process.env.REACT_APP_API_BASE_URL}/api/reservations/my`;

      try {
        const res = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await res.json();

        console.log("Fetched reservations:", data); // 🔍 log it

        if (res.ok) {
          dispatch({ type: "SET_RESERVATIONS", payload: data });
        } else {
          console.error("Error fetching reservations:", data.error);
        }
      } catch (err) {
        console.error("Error:", err.message);
      }
    };

    if (user) {
      fetchReservations();
    }
  }, [user, dispatch]);

  return (
    <div className="reserved">
      {user?.isHost && <Admin_Buttons />}
      <div className="reservations_section">
        <p className="reservations_title">
          {user?.isHost ? "Reservations on My Listings" : "My Reservations"}
        </p>
        <div className="reservations_table">
          <table>
            <thead>
              <tr className="titles">
                {user?.isHost && <th>Guest</th>}
                <th>Property</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr className="booking_info" key={r._id}>
                  {user?.isHost && <td>{r.guestId?.email || "Unknown"}</td>}
                  <td>{r.listingId?.title || "N/A"}</td>
                  <td>{new Date(r.startDate).toLocaleDateString()}</td>
                  <td>{new Date(r.endDate).toLocaleDateString()}</td>
                  <td>${r.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reserved;
