import React from "react";
import Footer from "./Footer";

const TermsConditionsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-lg max-w-none">
          <p>
            These Terms and Conditions ("Terms", "Terms and Conditions") govern
            your relationship with [website name] website (the "Service")
            operated by [company name] ("us", "we", or "our").
          </p>
          <p>
            Please read these Terms and Conditions carefully before using our
            Service.
          </p>

          <h2>Accounts</h2>
          <p>
            When you create an account with us, you must provide us information
            that is accurate, complete, and current at all times.
          </p>

          <h2>Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by [company name].
          </p>
          <p>
            [company name] has no control over, and assumes no responsibility
            for, the content, privacy policies, or practices of any third party
            web sites or services. You further acknowledge and agree that
            [company name] shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with use of or reliance on any such content, goods
            or services available on or through any such web sites or services.
          </p>

          {/* Add more sections as needed */}

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
            <a href="mailto:contact@example.com">contact@example.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditionsPage;
