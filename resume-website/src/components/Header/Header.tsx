import "./Header.css"

interface HeaderProps {
    onLinkClick?: (link: string) => void;
    scrollFunctions: { [key: string]: () => void };
}

const Header: React.FC<HeaderProps> = ({ onLinkClick, scrollFunctions }) => {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        event.preventDefault();
        if (onLinkClick) {
            onLinkClick(link);
        }
        if (scrollFunctions[link]) {
            scrollFunctions[link]();
        }

        // Log only in development environment
        if (process.env.NODE_ENV === 'development') {
            console.log(`Link clicked: ${link}`);
        }
    };

    const linkConfig = [
        { label: 'Contact', key: 'contact' },
        { label: 'Project', key: 'project' },
        { label: 'About', key: 'about' },
    ];

    return(
        <div className="header-container">
            <div className="title-container">
                Tanabodee Y.
            </div>
            <div className="topics-container">
                {linkConfig.map(({ label, key }) => (
                            <a href="#" onClick={(e) => handleLinkClick(e, key)}>
                                {label}
                            </a>
                    ))}
            </div>
        </div>        
    )
}

export default Header;