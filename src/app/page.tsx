import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./header";
import { CarouselSponsor } from "./carousel-sponsor";
import { SubscriptionPlan } from "./subscription-plan";
import Link from 'next/link';
import Footer from './footer';
import ChatbotIcon  from './chatbot-icon';
import { ForumLink } from './forum';
import MyMap from './maps';

export default function Home() {
  return (
    <>
      <Header />
      <CarouselSponsor />
      <div className="d-flex justify-content-center my-5">
        <Link href="/sponsor" passHref legacyBehavior>
          <a className="btn btn-primary btn-lg px-5 py-3 fw-bold shadow">Become a Sponsor</a>
        </Link>
      </div>
      <div>
        <SubscriptionPlan/>
      </div>
      <ChatbotIcon />
      <ForumLink />
      {/* <MyMap /> */}
      <Footer />
 
    </>
  );
}