const Dashboard = () => (
    <>
        <div className="bx--grid content-body">
            <div className="bx--row">
                <div className="bx--col">
                    <section>
                        <h1>Dashboard</h1>
                        <p>Show all of your invoices, repositories, and notes.</p>
                    </section>
                    <section id="invoices">
                        <h2>Invoices</h2>
                    </section>
                    <section id="repos">
                        <h2>Repositories</h2>
                    </section>
                    <section id="projnotes">
                        <h2>Project notes</h2>
                    </section>
                    <section id="randnotes">
                        <h2>Random notes</h2>
                    </section>
                </div>
            </div>
        </div>
    </>
);

export default Dashboard;