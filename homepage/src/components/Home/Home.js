import React, { useEffect, useState } from "react";
import axios from 'axios'
import DataTable from 'react-data-table-component';


function Home() {
    const [data, setData] = useState()

    const getResponse = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
            // console.log(response);
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getResponse()
    }, [])
    const columns = [
        {
            name: 'Name',

            selector: (row) => row.name,
        },
        {
            name: 'Region',
            selector: (row) => row.region,
        },
        {
            name: 'Flag',
            selector: (row) => <img width={50} height={50} src={row.flag} alt='flage' />,
        },
    ];

    return (
        <DataTable
            title="Country"
            columns={columns}
            data={data}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="550px"
            selectableRowsHighlight
            highlightOnHover
        />
    );
}

export default Home