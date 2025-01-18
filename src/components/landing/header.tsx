type Props = {
 
}
export const Header = ({}: Props) => {
    return ( 
        <div>
            <nav className="fixed w-full transition-all duration-300" style={{
                backdropFilter: typeof window !== 'undefined' && window.scrollY > 0 ? 'blur(10px)' : 'none',
                backgroundColor: typeof window !== 'undefined' && window.scrollY > 0 ? 'rgba(255, 255, 255, 0.8)' : 'transparent'
            }}>
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex space-x-8">
                        <a href="#home" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#featured" className="text-gray-800 hover:text-gray-600">Featured</a>
                        <a href="#testimonials" className="text-gray-800 hover:text-gray-600">Testimonials</a>
                        <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                        Shop Now
                    </button>
                </div>
            </nav>
        </div>
    );
}