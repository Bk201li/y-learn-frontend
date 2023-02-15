import React from "react";

export interface IAdminPageProps {}

const AdminPage: React.FunctionComponent<IAdminPageProps> = () => {
  return (
    <div className="home-main-container">
      <div className="cards-container text-center">
        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote mb-0 ">
              <p>Solde</p>
            </blockquote>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Revenus</p>
            </blockquote>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Dépenses</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
