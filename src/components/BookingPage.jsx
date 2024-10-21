import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <section className="booking">
            <div className="container">
                <BookingForm 
                    updateTimes={props.updateTimes}
                    availableTimes={props.availableTimes}
                    submitForm={props.submitForm}
                ></BookingForm>
            </div>  
        </section>
    );
}

export default BookingPage;