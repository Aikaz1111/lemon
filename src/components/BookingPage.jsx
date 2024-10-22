import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <main>
            <section className="hero">
                <div className="container">
                    <h1 className="hero__title">Table reservation</h1>
                </div>
            </section>
            <section className="booking">
                <div className="container">
                    <BookingForm 
                        updateTimes={props.updateTimes}
                        availableTimes={props.availableTimes}
                        submitForm={props.submitForm}
                    ></BookingForm>
                </div>  
            </section>
        </main>
        
    );
}

export default BookingPage;