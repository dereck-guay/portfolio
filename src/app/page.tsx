import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Page = () => {
    return (
        <>
            <section className="h-screen">
                <Navbar />
                <main className="py-20 px-4">Hello</main>
            </section>

            <section></section>

            <Footer />
        </>
    );
};

export default Page;
