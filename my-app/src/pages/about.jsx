function About(){

    return(
       <div className="flex justify-center items-center min-h-[80vh]">
    <div className="bg-white p-10 rounded-xl shadow-lg w-[1000px] text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
           About Us</h1>
        <p className="text-gray-600 leading-7">
    This project was built using React, React Router DOM and Tailwind CSS.
    It demonstrates authentication, protected routes, nested routing and
    responsive UI design.
</p>
    </div>
</div>
    );
}
export default About;
