/** @format */
import { Button, Carousel } from '@material-tailwind/react';
import { FaTooth } from 'react-icons/fa';
import { GiScrew } from 'react-icons/gi';
import { GiTooth } from 'react-icons/gi';
import { GiSaberTooth } from 'react-icons/gi';
import { GiQueenCrown } from 'react-icons/gi';
import { TbAtom } from 'react-icons/tb';

const Crowns = () => {
  return (
    <>
      <section className='min-h-[calc(100vh-70px-40px)] bg-no-repeat bg-cover object-cover bg-[url("https://images.pexels.com/photos/3831156/pexels-photo-3831156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
        <div className="bg-gradient-to-tr w-full h-[748px]  from-red-400 to-transparent flex items-center">
          <div className="max-w-xl pl-60">
            <h1 className="text-5xl">
              Hey there! Optimize your dental well-being with us!
            </h1>
            <p>
              Dental crowns are a type of dental restoration used to cover or
              "cap" a damaged tooth, restoring it's shape, size, strength and
              appearance. They are a versatile solution for teeth that are
              weakened, decayed or aesthetically unsatisfactory.
            </p>
            <div className=" mt-5 space-x-5">
              <Button className="rounded-full">Book a Schedle</Button>
              <Button className="rounded-full" variant="outlined" color="white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-20 justify-center items-center min-h-[80vh] py-10 bg-brown-50">
        <div className="flex items-center">
          <h3 className="text-5xl font-extrabold max-w-2xl">
            Types of Dental Crowns
          </h3>
        </div>
        <div className="flex space-x-10">
          <div className="bg-red-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>Porcelain or Ceramic Crowns:</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              These crowns closely mimic the natural look of teeth and are
              highly aesthetic, making them ideal for front teeth. It is best
              for patients who want a natural-looking restoration or those with
              metal alergies.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-red-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>Porcelain-Fused-to-Metal(PFM) Crowns:</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              These crowns have a metal base for strength, with a porcelain
              outer layer for a natural appearance. Suitable for both front and
              back teeth due to their combination of strength and aesthetics.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-red-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>Metal Crowns(Gold or Alloy):</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Metal crowns, popularly called gold or silver-coloured alloys, are
              not cosmetically appealing but are extremely durable. Ideal for
              back teeth wherer durability is a priority and aesthetics are less
              important.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
          <div className="bg-red-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>Zirconia Crowns:</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Zirconia crowns are highly durable and can be made to match the
              colour of natural teeth, providing a good balance between
              aesthetics and strength. It is great for patients who need both
              strength and a natural appearance suitable for both front and back
              teeth.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
        </div>
      </section>

      <section className="flex justify-center space-x-20 items-center min-h-[80vh]">
        <div className="ml-6 font-sans space-y-10">
          <h3 className="font-extrabold">Advantages of Dental Crowns</h3>
          <p>
            <span className="font-extrabold"> Restores Function:</span> Crowns
            restore the normal function of teeth, allowing patients to bite,
            chew, and speak properly.
          </p>

          <p>
            <span className="font-extrabold">Durable:</span>
            Crowns are long-lasting, with many types providing 10 to 15 years of
            use or even longer with proper care.
          </p>

          <p>
            <span className="font-extrabold"> Natural Appearance: </span>Crowns
            made from porcelain or zieconia can look indistinguishable from
            natural teeth, improving the appearance of your smile.
          </p>

          <p>
            <span className="font-extrabold">Protects:</span>
            Depending on the method used, periodic touch-ups may be required to
            maintain your desired level of whiteness.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-8">
          <div className="bg-yellow-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Oral Hygiene</h4>
            <p className="mt-3">
              Maintain good oral hygiene by brushing twice a day and flosing
              daily. While crowns themselves cannot decay, the underlying tooth
              can.
            </p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/3845745/pexels-photo-3845745.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">
              Regular Dental Check-Ups:
            </h4>
            <p className="mt-3">
              Routine dental visits help ensure that the crown and surrounding
              teeth remain healthy.
            </p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/27642272/pexels-photo-27642272/free-photo-of-glas-mit-walnusse.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Avoid Hard Foods</h4>
            <p className="mt-3">
              Be cautious with hard foods or objects that could chip or damage
              the crown.
            </p>
          </div>
          <div className="bg-yellow-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/17300288/pexels-photo-17300288/free-photo-of-the-black-women.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="rounded-full size-25"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Address Sensitivity</h4>
            <p className="mt-3">
              If you experience any discomfort or sensitivity after getting a
              crown, inform your dentist for further assessment
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crowns;
