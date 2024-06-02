import ProductCard from "./ProductCard";

export function ProfileCard(){
    return (
        
    <div>
    <div className="w-full flex justify-center mt-10 mb-4">
    <div className="bg-black shadow-xl rounded-lg py-3 w-60">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src="/profile.jpg" alt="John Doe"></img>
        </div>
        <div className="p-2">
            <h3 className="text-center text-3xl text-White font-medium leading-8">Joh Doe</h3>
            
            

            
            </div>
        </div>
        </div>
        <div className="w-screen flex justify-center mt-10">
        <h1 className="text-5xl font-bold">Bought Courses</h1>
        </div>
        <div>
        <div className="grid grid-cols-3 gap-10 mt-20  mx-20">
        <ProductCard src="/htmlcssjs.png" title="Full WebDev Roadmap for Beginers" description="A beginner's course covering HTML, CSS, JavaScript, Git, responsive design, frameworks, basic backend, and project-based learning for web development." buttontext="Visit Content"/>
        <ProductCard src="/backend.png" title="Full Backend Roadmap for Beginers" description="A beginner's course covering server-side programming, databases, APIs, authentication, and deployment, focusing on foundational backend development skills." buttontext="Visit Content"/>
        <ProductCard src="/uiux.png" title="Full UI UX Guide for Beginers" description="A beginner's course covering design principles, user research, wireframing, prototyping, usability testing, and creating engaging, user-friendly interfaces." buttontext="Visit Content"/>
        </div>
        </div>
        </div>
    )
}