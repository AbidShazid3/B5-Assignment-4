import Heading from "@/components/common/Heading";


const teamMembers = [
    {
        name: "Arthur Melo",
        role: "Author",
        img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80",
    },
    {
        name: "Amelia Anderson",
        role: "Author",
        img: "https://images.unsplash.com/photo-1531590878845-12627191e687?auto=format&fit=crop&w=764&q=80",
    },
    {
        name: "Olivia Wathan",
        role: "Author",
        img: "https://images.unsplash.com/photo-1488508872907-592763824245?auto=format&fit=crop&w=1470&q=80",
    },
    {
        name: "Junior REIS",
        role: "Author",
        img: "https://images.unsplash.com/photo-1608174386344-80898cec6beb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
];

const PopularAuthor = () => {
    return (
        <div className="mt-16 p-2 md:p-4 lg:p-4">
            <Heading heading="Meet Our Popular Authors" subHeading="Discover the most influential and renowned authors who have shaped literature with their exceptional works."></Heading>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl"
                    >
                        <img
                            className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                            src={member.img}
                            alt={member.name}
                        />
                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                            {member.name}
                        </h1>
                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                            {member.role}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default PopularAuthor;