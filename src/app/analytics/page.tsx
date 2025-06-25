import 'bootstrap/dist/css/bootstrap.css';
import MonthlyTrendChart from './analytics-graph';
import WeeklyAnalysisChart from './weely-subs';
import { Header } from '../header';
import Footer from '../footer';
import SponsorshipCategoryChart from './graph01'
import MonthlySponsorSignupsChart from './graph02'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-6 d-flex align-items-stretch">
            <MonthlyTrendChart />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-stretch">
            <WeeklyAnalysisChart />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-stretch">
            <SponsorshipCategoryChart />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-stretch">
            <MonthlySponsorSignupsChart />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}