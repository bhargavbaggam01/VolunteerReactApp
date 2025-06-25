import 'bootstrap/dist/css/bootstrap.css';
import { Header } from '../header';
import Footer from '../footer';
import SponsorManagement from './sponsor'

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <SponsorManagement />
      <Footer />
    </div>
  );
}