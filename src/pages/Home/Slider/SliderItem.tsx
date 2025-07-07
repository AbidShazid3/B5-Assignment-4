interface SliderItemProps {
    image: string;
    text: string;
}

const SliderItem = ({ image, text }: SliderItemProps) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-start w-full h-full bg-gray-900/70'>
                <div className='flex flex-col gap-4 pl-3 md:pl-12 lg:pl-12'>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-white">We Provide</h2>
                    <h2 className='text-3xl md:text-6xl lg:text-7xl font-bold text-white'>
                        {text}
                    </h2>
                    <p className="w-11/12 md:w-2/3 lg:w-1/2 text-white">
                        Manage books, users, and borrow records seamlessly with our smart Library Management System — designed to make learning more accessible and efficient.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;