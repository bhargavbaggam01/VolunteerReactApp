import React from 'react';

const productPlans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/mo',
    features: [
      '1 Featured Listing',
      'Basic Support',
      'Logo on Sponsors Page',
    ],
    btnClass: 'btn-outline-primary',
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/mo',
    features: [
      '3 Featured Listings',
      'Priority Support',
      'Logo & Link on Homepage',
      'Social Media Shoutout',
    ],
    btnClass: 'btn-primary',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$199',
    period: '/mo',
    features: [
      'Unlimited Listings',
      '24/7 Dedicated Support',
      'Logo & Link on All Pages',
      'Custom Partnership',
    ],
    btnClass: 'btn-warning',
  },
];

const supportPlans = [
  {
    name: 'Standard',
    price: '$29',
    period: '/mo',
    features: [
      'Email Support',
      'Basic Documentation',
      'Community Forum Access',
    ],
    btnClass: 'btn-outline-success',
  },
  {
    name: 'Priority',
    price: '$79',
    period: '/mo',
    features: [
      'Priority Email Support',
      'Phone Support',
      'Advanced Documentation',
      'Dedicated Support Agent',
    ],
    btnClass: 'btn-success',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$149',
    period: '/mo',
    features: [
      '24/7 Phone Support',
      'Custom Integration',
      'On-site Training',
      'SLA Guarantee',
    ],
    btnClass: 'btn-info',
  },
];

export const SubscriptionPlan = () => (
  <div className="container my-5">
    <style>{`
      .plan-card {
        transition: transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s, border-color 0.2s;
        border: 1px solid #bbb !important;
      }
      .plan-card.highlight {
        border: 1.5px solid #888 !important;
      }
      .plan-card:hover {
        transform: scale(1.055) translateY(-7px);
        box-shadow: 0 10px 36px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.09);
        z-index: 2;
        border-color: #888 !important;
      }
      .plan-card.highlight:hover {
        transform: scale(1.11) translateY(-12px);
        box-shadow: 0 16px 48px rgba(0,0,0,0.18), 0 3px 16px rgba(0,0,0,0.13);
        border-color: #555 !important;
      }
    `}</style>
    {/* Product Plans Section */}
    <div className="mb-5">
      <h2 className="text-center mb-4 fw-bold" style={{ letterSpacing: '1px' }}>Product Plans</h2>
      <div className="row g-4 justify-content-center">
        {productPlans.map((plan) => (
          <div className="col-12 col-md-6 col-lg-4" key={plan.name}>
            <div
              className={`card plan-card${plan.highlight ? ' highlight' : ''} h-100 shadow-sm border-0 ${plan.highlight ? 'bg-primary text-white' : ''}`}
              style={plan.highlight ? { transform: 'scale(1.04)', zIndex: 1 } : { }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className={`card-title fw-bold mb-3 ${plan.highlight ? 'text-white' : 'text-primary'}`}>{plan.name}</h5>
                <div className="mb-3">
                  <span className="display-5 fw-bold">{plan.price}</span>
                  <span className="fs-5 opacity-75 ms-1">{plan.period}</span>
                </div>
                <ul className={`list-unstyled mb-4 w-100 ${plan.highlight ? 'text-white-50' : 'text-muted'}`}
                  style={{ minHeight: 120 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <span className="me-2">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${plan.btnClass} rounded-pill px-4 py-2 fw-semibold mt-auto`}
                  style={plan.highlight ? { background: '#fff', color: '#0d6efd', border: 'none' } : { }}
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Help & Support Plans Section */}
    <div>
      <h2 className="text-center mb-4 fw-bold" style={{ letterSpacing: '1px' }}>Help & Support Plans</h2>
      <div className="row g-4 justify-content-center">
        {supportPlans.map((plan) => (
          <div className="col-12 col-md-6 col-lg-4" key={plan.name}>
            <div
              className={`card plan-card${plan.highlight ? ' highlight' : ''} h-100 shadow-sm border-0 ${plan.highlight ? 'bg-success text-white' : ''}`}
              style={plan.highlight ? { transform: 'scale(1.04)', zIndex: 1 } : { }}
            >
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className={`card-title fw-bold mb-3 ${plan.highlight ? 'text-white' : 'text-success'}`}>{plan.name}</h5>
                <div className="mb-3">
                  <span className="display-5 fw-bold">{plan.price}</span>
                  <span className="fs-5 opacity-75 ms-1">{plan.period}</span>
                </div>
                <ul className={`list-unstyled mb-4 w-100 ${plan.highlight ? 'text-white-50' : 'text-muted'}`}
                  style={{ minHeight: 120 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <span className="me-2">✔️</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${plan.btnClass} rounded-pill px-4 py-2 fw-semibold mt-auto`}
                  style={plan.highlight ? { background: '#fff', color: '#198754', border: 'none' } : { }}
                >
                  Choose {plan.name}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SubscriptionPlan;
