import 'bootstrap/dist/css/bootstrap.css';
import ApprovalRequest from './approval-request';
import ApprovalStatus from './approval-status';
import Header from '../header';
import Footer from '../footer';

export default function Home() {
  return (
    <> 
        <Header />
        <ApprovalRequest /> 
        <ApprovalStatus />
        <Footer />

    </>
  );
}