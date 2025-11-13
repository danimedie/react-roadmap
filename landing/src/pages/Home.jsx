import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Impactful Web Solutions | Medié</title>
                <meta name="description" content="Discover innovative web solutions tailored to your business needs. Boost your online presence with our expert services." />
            </Helmet>
        
            <p className="mt-32 text-center text-7xl text-shadow">
                I build <span className="font-gelasio font-bold italic underline text-purple-300">impactful</span>
                <br/> web solutions
            </p>
        </>
    );
}