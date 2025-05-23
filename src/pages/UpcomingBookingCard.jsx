// import { doc, where, query, getDocs, updateDoc, collection } from "firebase/firestore";
import React from "react";
// import { appDB } from "../utils/firebase";

// const { VITE_FIREBASE_CANCELLATION_KEY } = import.meta.env;

// Changed to a named function and separated the export
export default function UpcomingBookingCard({ bookingData }) {
  // const handleCancelBooking = async (bookingId) => {
  //   console.log("Cancelling booking:", bookingId, "for user:", bookingData.UserId);

  //   try {
  //     const bookingsCollectionRef = collection(appDB, "CarsPaymentSuccessDetails");
  //     const bookingQuery = query(
  //       bookingsCollectionRef,
  //       where("bookingId", "==", bookingId)
  //     );

  //     const bookingSnapshot = await getDocs(bookingQuery);
  //     if (bookingSnapshot.empty) {
  //       console.error("No booking found with the given ID");
  //       return;
  //     }

  //     const bookingDoc = bookingSnapshot.docs[0];
  //     console.log("Found booking document:", bookingDoc.id);

  //     await updateDoc(doc(appDB, "CarsPaymentSuccessDetails", bookingDoc.id), {
  //       'Cancelled': true,
  //       'CancellationDate': new Date()
  //     });
  //     console.log("Booking marked as cancelled in Firestore");

  //     // Now call the API to cancel the booking in the backend
  //     try {
  //       const cancelUrl = `${VITE_FIREBASE_CANCELLATION_KEY}cancelZoomBooking`;

  //       const response = await fetch(cancelUrl, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           uid: bookingData.UserId,
  //           bookingId: bookingId,
  //         }),
  //       });
  //       if (!response.ok) {
  //         throw new Error(`Server responded with status ${response.status}`);
  //       }

  //       const result = await response.json();
  //       console.log("Cancellation successful:", result);
  //     } catch (e) {
  //       console.error("Error in cancelling the booking:", e);
  //     }
  //   } catch (e) {
  //     console.error("Error updating cancellation status:", e);
  //     alert("Failed to cancel booking. Please try again.");
  //   }
  // };

  return (
    <div>
      {/* Booking Card */}
      <div className="bg-[#363636] mt-4 p-4 rounded-lg flex items-center space-x-4">
        <img
          src={bookingData.CarImage}
          alt={bookingData.CarName}
          className="w-50 h-24 rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-[#faffa4]">
            {bookingData.CarName}{" "}
            <span className="text-lg text-white">({bookingData.Vendor})</span>
          </h3>
          <p className="text-gray-400">
            Booking ID:{" "}
            <span className="text-white">{bookingData.bookingId}</span>
          </p>
          <p className="text-gray-400">
            Price: <span className="text-white">₹{bookingData.price}</span>
          </p>
          <p className="text-gray-400">
            From: <span className="text-white">{bookingData.StartDate}</span>{" "}
            <br />
            To: <span className="text-white">{bookingData.EndDate}</span>
          </p>

          {/* Display pickup and drop if vendor is mychoize */}
          {bookingData["Pickup Location"] && (
            <p className="text-gray-400">
              Pickup:{" "}
              <span className="text-white">
                {bookingData["Pickup Location"]}
              </span>
              <br />
              {bookingData["Drop Location"] && (
                <>
                  Drop:{" "}
                  <span className="text-white">
                    {bookingData["Drop Location"]}
                  </span>
                </>
              )}
            </p>
          )}

          <p className="text-gray-400 mt-1">
            {bookingData["Package Selected"]} | {bookingData.Transmission}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-2">
          {/* <button className="bg-[#faffa4] text-black px-4 py-2 rounded-md">
            Extend Booking
          </button> */}
          <button className="bg-[#faffa4] text-black px-4 py-2 rounded-md">
            If Cancelled By Vendor
          </button>
          {/*<button
            className="bg-[#2a2a2a] text-[#faffa4] border border-[#faffa4] px-4 py-2 rounded-md hover:bg-red-900 hover:border-red-500 hover:text-white transition-colors font-semibold"
            // onClick={() => handleCancelBooking(bookingData.bookingId)}
          >
            Cancel
          </button> */}
        </div>
      </div>
    </div>
  );
}
