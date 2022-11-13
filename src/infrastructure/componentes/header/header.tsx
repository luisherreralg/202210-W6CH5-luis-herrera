import Menu from '../menu/menu';

function Header() {
    return (
        <header className="w-full shadow-md">
            <div
                className="bg-gray-800 text-stone-300 text-3xl flex
                justify-between items-center p-4"
            >
                <div>
                    <h1>Cones&Gnomes</h1>
                </div>
                <Menu></Menu>
            </div>
        </header>
    );
}

export default Header;
