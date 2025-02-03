import Image from "next/image"
import flightAtt from "@/images/flight-att.jpg"

export default async function Blog() {

  return (
      <div className="flex justify-center pt-14">  
        <div className="max-w-[750px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Ultimate Guide to Carry-On Luggage Essentials</h1>
          <p className="text-xl text-gray-600 ">{"Planning a trip and dreading checked baggage fees?  Master the art of the carry-on!  This post breaks down everything you need to pack in your carry-on bag for a smooth and stress-free flight.  From essential toiletries to must-have electronics, we've got you covered.  Learn our top tips for maximizing space, staying organized, and breezing through airport security."}</p>
          <Image
            height={500}
            width={700}
            src={flightAtt}
            alt="Flight Att Image"
          />
        </div>
        <div>

        </div>
      </div>
  )
}