import 'bootstrap/dist/css/bootstrap.css';
import { Header } from '../header';
import Footer from '../footer';
import { BecomeSponsor } from './become-sponsor';

export default function Home() {
  return (
    <>
    <Header />
    <BecomeSponsor />
    <Footer />
    </>
  );
}