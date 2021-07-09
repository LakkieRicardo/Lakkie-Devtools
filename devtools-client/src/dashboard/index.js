import { Tabs, Tab, DataTable, TableHead, TableHeader, TableRow, TableContainer, Table, TableBody, TableCell } from 'carbon-components-react';

const invoiceHeaderData = [
    {
        header: "ID #",
        key: "id"
    },
    {
        header: "Name",
        key: "name"
    },
    {
        header: "Date",
        key: "date"
    },
    {
        header: "From",
        key: "from"
    },
    {
        header: "details",
        key: "details"
    },
    {
        header: "status",
        key: "status"
    },
];

const invoiceRowData = [
    {
        id: 4,
        name: "BattleMania",
        date: "7-9-2021",
        from: "Diego",
        details: "Spigot server plugin and installation",
        status: "Complete"
    },
    {
        id: 11,
        name: "Lakkie.net",
        date: "7-9-2021",
        from: "Diego",
        details: "Web portfolio",
        status: "Complete"
    }
];

const repoHeaderData = [
    {
        header: "ID #",
        key: "id"
    },
    {
        header: "Name",
        key: "name"
    },
    {
        header: "Location",
        key: "location"
    },
    {
        header: "Description",
        key: "description"
    },
    {
        header: "Notes",
        key: "notes"
    }
];

const repoRowData = [
    {
        id: 1,
        name: "Lakkie-Devtools",
        location: "https://github.com/LakkieRicardo/Lakkie-Devtools",
        description: "Web app to keep track of development projects/invoices/local repositories/etc",
        notes: "#notes-Lakkie-Devtools"
    }
];

const Dashboard = () => (
    <>
        <div className="bx--grid content-body">
            <div className="bx--row">
                <div className="bx--col">
                    <section>
                        <h1>Dashboard</h1>
                        <p>Show all of your invoices, repositories, and notes.</p>
                    </section>
                    <section>
                        <Tabs>
                            <Tab label="Invoices" id="invoices">
                                <DataTable rows={invoiceRowData} headers={invoiceHeaderData} isSortable>
                                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                                        <TableContainer title="Invoices">
                                        <Table {...getTableProps()}>
                                            <TableHead>
                                            <TableRow>
                                                {headers.map((header) => (
                                                <TableHeader {...getHeaderProps({ header })}>
                                                    {header.header}
                                                </TableHeader>
                                                ))}
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                {row.cells.map((cell) => (
                                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                                ))}
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
                                    )}
                                </DataTable>
                            </Tab>
                            <Tab label="Repositories" id="repos">
                                <DataTable rows={repoRowData} headers={repoHeaderData} isSortable>
                                    {({ rows, headers, getHeaderProps, getTableProps }) => (
                                        <TableContainer title="Repositories">
                                        <Table {...getTableProps()}>
                                            <TableHead>
                                            <TableRow>
                                                {headers.map((header) => (
                                                <TableHeader {...getHeaderProps({ header })}>
                                                    {header.header}
                                                </TableHeader>
                                                ))}
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.id}>
                                                {row.cells.map((cell) => (
                                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                                ))}
                                                </TableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                        </TableContainer>
                                    )}
                                </DataTable>
                            </Tab>
                            <Tab label="Project notes" id="projnotes">
                                
                            </Tab>
                            <Tab label="Random notes" id="randnotes">
                                
                            </Tab>
                        </Tabs>
                    </section>
                </div>
            </div>
        </div>
    </>
);

export default Dashboard;