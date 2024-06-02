import { Footer } from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
export default function(){
    return <div>
        <div className="grid grid-cols-3 gap-10 mt-20  mx-20">
        <ProductCard src="/htmlcssjs.png" title="Full WebDev Roadmap for Beginers" description="A beginner's course covering HTML, CSS, JavaScript, Git, responsive design, frameworks, basic backend, and project-based learning for web development." buttontext="Visit Content"/>
        <ProductCard src="/backend.png" title="Full Backend Roadmap for Beginers" description="A beginner's course covering server-side programming, databases, APIs, authentication, and deployment, focusing on foundational backend development skills." buttontext="Visit Content"/>
        <ProductCard src="/uiux.png" title="Full UI UX Guide for Beginers" description="A beginner's course covering design principles, user research, wireframing, prototyping, usability testing, and creating engaging, user-friendly interfaces." buttontext="Visit Content"/>
        </div>
        
    </div>
}