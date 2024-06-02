import ProductCard from "@/components/ProductCard";

export default function(){
    return <div>
        <div className="grid grid-cols-3 gap-10 mt-20  mx-20">
        <ProductCard src="/react.png" title="React Revolution: Frontend Wizardry Unleashed" description="Embark on a React journey, mastering dynamic web development in this comprehensive course for frontend excellence." buttontext="Buy Now"/>
        <ProductCard src="/next.jpg" title="Next.js Navigators: Journey into Dynamic Web Development" description="Step into Next.js world, mastering dynamic web development in this course tailored for frontend excellence and innovation." buttontext="Buy Now"/>
        <ProductCard src="/tailwind.jpg" title="Tailwind Triumph: Streamlined Styling for Web Wizards" description="Dive into Tailwind's simplicity, mastering streamlined styling in this course tailored for web design excellence and efficiency." buttontext="Buy Now"/>
        </div>
        <div className="grid grid-cols-3 gap-10  my-10 mx-20">
        <ProductCard src="/cpp.webp" title="Mastering C++: Code Craftsmanship Unleashed" description="Discover the art of C++ coding mastery in this comprehensive course, unleashing your potential for programming excellence." buttontext="Buy Now"/>
        <ProductCard src="/java (1).png" title="Java Journey: Code Mastery Unlocked" description="Dive into Java coding mastery with this comprehensive course, unlocking your potential for programming excellence." buttontext="Buy Now"/>
        <ProductCard src="/python.jpg" title="Python Power: Scripting Success Simplified" description="Embark on a Python adventure, mastering coding with creativity and simplicity in this comprehensive course for programming excellence." buttontext="Buy Now"/>
        </div>
        
        <div className="grid grid-cols-3 gap-10 my-10 mx-20">
        <ProductCard src="/js.jpg" title="JavaScript Juggernaut: Dominate the Web with Code Magic" description="Explore the world of JavaScript, mastering coding fundamentals in this course tailored for programming excellence and versatility." buttontext="Buy Now"/>
        <ProductCard src="/nodejs.jpg" title="Node.js Ninja: Mastering Server-Side JavaScript" description="Embark on a Node.js adventure, mastering server-side JavaScript in this comprehensive course tailored for programming excellence and backend proficiency." buttontext="Buy Now"/>
        <ProductCard src="/django.jpg" title="Django Dynamics: Crafting Web Apps with Python Power" description="Dive into Django's world, mastering web app development in this course tailored for programming excellence and backend proficiency." buttontext="Buy Now"/>
        </div>
        <div className="grid grid-cols-3 gap-10 my-10 mx-20">
        <ProductCard src="/mongodb.jpg" title="MongoDB Mastery: Unleashing Data Powerhouse" description="Delve into MongoDB, mastering database management in this course tailored for data-driven excellence and scalable solutions." buttontext="Buy Now"/>
        <ProductCard src="/postgres.png" title="PostgreSQL Prowess: Harnessing Relational Data Might" description="Dive into PostgreSQL, mastering relational databases in this course tailored for data-driven excellence and scalable solutions." buttontext="Buy Now"/>
        <ProductCard src="/prisma.jpg" title="Prisma Proficiency: Data Management Redefined" description="Discover the magic of Prisma, mastering cutting-edge database management in this course designed for seamless data handling and accelerated development." buttontext="Buy Now"/>
        </div>
    </div>
}