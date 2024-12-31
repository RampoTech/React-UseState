import "./Footer.css"

function Footer(){

    function handleYear(){
        const year = new Date().getFullYear();
        return year
    }
    return(
        <footer className="footer">
            <p>CopyRight &copy; 2024-{handleYear()} | RampoTech.com</p>
        </footer>
    )
}

export default Footer;