import React from 'react';

function NotFound() {
  return (
    <div className="container">
      <div className="bg-absolute" />

      <div className="d-table w-100" style={{ minHeight: 550 }}>
        <div className="d-table-cell align-middle">
          <div className="container">
            <div className="row">
              <div className="col-8 mx-auto text-center">
                <img src="/images/404.png" alt="error" height="300" />

                <h4 className="mt-3 font-weight-bold">Page Not Found</h4>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>
                <button
                  onClick={() => (window.location.href = '/')}
                  className="btn btn-outline-primary w-100"
                >
                  Back to app
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
