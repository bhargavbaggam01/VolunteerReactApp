import 'bootstrap/dist/css/bootstrap.css';
import FeedbackHome from './feedback-home';
import { Header } from '../header';
import Footer from '../footer';

export default function Home() {
  return (
    <>
                <Header />
                <FeedbackHome />
                <Footer />
    </>
  );
}