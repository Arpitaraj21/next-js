const DashboardLayout = ({children}) => {
    return(
        <>
        <div>
            <nav>
                <h1>Navbar</h1>
            </nav>
            <div>
                {children}
            </div>
        </div>
        </>
    )
}

export default DashboardLayout;