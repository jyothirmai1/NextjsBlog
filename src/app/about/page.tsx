
import Image from "next/image";
export default function About() {
  return (
    <div className="max-w-2xl mt-10 mx-auto px-4 py-5 ">
  <h1 className="text-4xl font-bold text-[#24899f] mb-6">About DigitalNext</h1>
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG5leHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt="about"
          width={1200}
          height={500}
          className="object-cover rounded-lg mb-6"
        />
   <p className="text-[#24899f]">
    DigitalNext is your go-to resource for mastering the digital realm. We provide valuable insights, tips, and tricks to help you navigate the complexities of modern technology, boost your productivity, and ensure your online safety. Our focus on practical advice and user experience sets us apart, offering a seamless learning journey for all digital enthusiasts.
   </p>
   <p className="text-[#24899f]">
    Our mission is to empower individuals in maximizing the potential of their digital lives. We are dedicated to providing expert guidance, innovative solutions, and reliable information on technology, productivity, and online safety. Join us in this journey of exploration and growth towards a more digitally empowered future.
   </p>
    </div>
  )
}
