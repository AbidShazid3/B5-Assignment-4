type HeadingProps = {
  heading: string;
  subHeading: string;
};

const Heading = ({heading, subHeading}: HeadingProps) => {
    return (
        <div className="p-2">
            <div className='text-center mb-10 space-y-3'>
                <h2 className='text-xl font-semibold lg:text-3xl uppercase'>{heading}</h2>
                <p className='italic underline underline-offset-8 lg:px-3'>---{subHeading}---</p>
            </div>
        </div>
    );
};

export default Heading;