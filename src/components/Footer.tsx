
interface CompanyInfo{
    company:string;
    year:number;
}

// แบบ Object Destructuring
function Footer({company, year}:CompanyInfo){
    return(
        <>
            <i>บริษัท {company} จำกัด | ปีที่ก่อตั้ง {year}</i>
        </>
    )
}

export default Footer;