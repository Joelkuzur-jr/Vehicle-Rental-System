import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
    return (
        <div>
            <Navbar />

            <main>
                <h1>Welcome to Vehicle Rental System</h1>

                <p>
                    Manage vehicles, customers and rental
                    activities through our system.
                </p>
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;