interface LayoutProps {
    children: React.ReactNode
};


const Layout = ({
    children,
}: LayoutProps) => {
    return(
        <div>
            <nav>
            I am a navbar
            </nav>
            {children}
        </div>
    )
}



export default Layout;