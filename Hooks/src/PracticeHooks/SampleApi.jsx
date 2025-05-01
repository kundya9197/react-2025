import React, { useEffect, useState } from 'react'

function SampleApi() {
    const [data, setdata] = useState([])
    const [categories, setcategories] = useState([])
    const [SelectedCategoryID, setSelectedCategoryID] = useState(0)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getProductList()
        getCategoryList()
    }, [])

    useEffect(() => {
        console.log("select", SelectedCategoryID)
        getProductList()
    }, [SelectedCategoryID])

    const getProductList = () => {
        setLoading(true)
        console.log("Product api call")
        fetch(`https://apigsfresh.cdat.work/CommonDDLData/Get_APK_DDL_M_Product_Select?M_FinancialYearID=0&M_MonthID=0&M_CompanyID=0&M_ProductCategoryID=${SelectedCategoryID}&M_UserID=1&Flag=Master&Language=`)
            .then(response => response.json())
            .then(res => setdata(res.data.table))
            .finally(() => {
                setLoading(false)
            })
    }
    const getCategoryList = () => {
        setLoading(true)
        fetch("https://apigsfresh.cdat.work/CommonDDLData/Get_APK_DDL_M_ProductCategory_Select?M_FinancialYearID=0&M_MonthID=0&M_UserID=1&Flag=Master&Language=")
            .then(response => response.json())
            .then(res => setcategories(res.data.table))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div >
            <p>Product Name</p>
            <div >
                <select name="Category" id="Category" className='border-2 mx-4 rounded'
                    value={SelectedCategoryID}
                    onChange={(e) => {
                        setSelectedCategoryID(e.target.value);
                        console.log('itemid', e.target.value);
                    }}>
                        <option value="0">Select</option>
                    {
                        categories?.map((item) => {
                            
                            return (
                                <option
                                    value={item?.m_ProductCategoryID}

                                >
                                    {item?.productCategory ? item.productCategory : '--'}
                                </option>
                            )
                        })
                    }
                    {/* <option value="Category">Category 2</option>
                    <option value="Category">Category 3</option>
                    <option value="Category">Category 4</option> */}
                </select>
                <button className='bg-red-700 py-1 px-3 rounded'
                onClick={()=>setSelectedCategoryID(0)}
                ><span className='text-lg'>×</span> Clear</button>
            </div>
            <div className='p-3 text-center items-center mx-100 '>
                <table className='border-2 w-full'>
                    <tbody>

                        <tr className='bg-green-600 border-2'>
                            <th className="py-2 px-4 bg-green-700 text-white border border-gray-300">Sr.No.</th>
                            <th className="py-2 px-4 bg-green-700 text-white border border-gray-300">Product Name</th>

                        </tr>
                        {console.log(data)}
                        {data?.map((item) => {
                            return (

                                <tr className='border-2'>
                                    <td >{item.m_ProductID}</td>
                                    <td>{item.productName}</td>

                                </tr>
                            )
                        }
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default SampleApi