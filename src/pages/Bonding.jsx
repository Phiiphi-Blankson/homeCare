/** @format */

import { Button, Carousel } from '@material-tailwind/react';
import { FaTooth } from 'react-icons/fa';
import { GiScrew } from 'react-icons/gi';
import { GiTooth } from 'react-icons/gi';
import { GiSaberTooth } from 'react-icons/gi';
import { GiQueenCrown } from 'react-icons/gi';
import { TbAtom } from 'react-icons/tb';

const Bonding = () => {
  return (
    <>
      <section className='min-h-[calc(100vh-70px-40px)] bg-no-repeat bg-cover object-cover bg-[url("https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
        <div className="bg-gradient-to-tr w-full h-[748px]  from-brown-500 to-transparent flex items-center">
          <div className="max-w-xl pl-60">
            <h1 className="text-5xl">What is Bonding?</h1>
            <p>
              It is a cosmetic dental procedure that involves applying a
              tooth-colored resin material to the surface of a tooth to improve
              it's appearance or repair damage. It's a versatile and relatively
              simple treatment that can address various dental issues.
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

      <section className="flex flex-col space-y-20 justify-center items-center min-h-[80vh] py-10 bg-blue-gray-50">
        <div className="flex items-center">
          <h3 className="text-5xl font-extrabold max-w-2xl">
            Dental Bonding Explained
          </h3>
        </div>
        <div className="flex space-x-10">
          <div className="bg-brown-50 p-10 rounded-2xl max-w-sm shadow">
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Dental bonding uses a composite resin material that is applied
              directly top the tooth and tyhen shaped, hardened and polished to
              match the surrounding teeth. The procedure is minimally invasive
              and cam usually be complted in a single visit.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-brown-50 p-10 rounded-2xl max-w-sm shadow">
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Bonding can fill in chips or cracks in teeth, restoring their
              shape amd function while blending seamlessly with the natural
              tooth. It is also and effective way to close small gaps or spaces
              between teeth, providing a more uniform appearance.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-brown-50 p-10 rounded-2xl max-w-sm shadow">
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Dental bonding can change the shape of teeth, making them look
              longer, wider or more symmetrical to improve the overall smile.
              For patients with gum receddion, bonding can be used to cover and
              protect exposed tooths roots which can be sensitive to temperature
              chnages or prone to decay.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
        </div>
      </section>

      <section className="flex justify-center space-x-20 items-center min-h-[80vh]">
        <div className="ml-6 font-sans space-y-10">
          <h3 className="font-extrabold">The Dental Implant Procedure</h3>
          <p>
            <span className="font-extrabold"> Quick and Easy:</span> The bonding
            process is uually completed in one visit, often taking 30 to 60
            minutes per tooth
          </p>

          <p>
            <span className="font-extrabold">Cost-Effective: </span>Bonding is
            generally more affordable than other cosmetic treatments like
            veneers or crowns.
          </p>

          <p>
            <span className="font-extrabold"> Minimally Invasive: </span>The
            procedure requires little to no removal of the natural tooth
            structure
          </p>

          <p>
            <span className="font-extrabold">Aesthetic Improvement:</span>
            Bonding can significantly enhance the appearance of teeth, providing
            a natural look
          </p>

          <p>
            <span className="font-extrabold">Reversible:</span> Since bonding
            does not require significant alteration of the tooth, it's a
            reversible procedure.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-8">
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Consultation</h4>
            <p className="mt-3">
              The dentist examines the teeth to determine if bonding is
              appropraiote and discusses the desired results with the patient.
              the Dentist selects a resin shade that closely mnatches the
              natural color of the patient's teeth for a seamless appearance.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/1204178247/photo/3d-render-of-dental-bonded-retainer-on-lower-jaw.jpg?s=2048x2048&w=is&k=20&c=gjnYl1NourKL186QmoywmH7Y9M7_ryAlNEayqJv4iMg="
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">
              Application of Bonding Material
            </h4>
            <p className="mt-3">
              The tooth surface is roughened slightly and a conditioning liquid
              is applied to helop the bonding material adhere proiperly. the
              dentist applies the outty-like resin to the tooth molding and
              shaping it to the desired form.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/988195822/photo/close-up-macro-photo-of-metall-amalgam-dental-fillings.jpg?s=1024x1024&w=is&k=20&c=2s2JIoj-7HBZNndENFcZHkBASXmg4bn-isdORlsZLGM="
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Curing the Resin</h4>
            <p className="mt-3">
              A special ultraviolet light or laser is used to harden (cure) the
              resin material, bonding it securely to the tooth.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/6627606/pexels-photo-6627606.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="rounded-full size-25"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Shaping and Polishing</h4>
            <p className="mt-3">
              Once the resin is hardened, the dentist trims and shapes it
              further, then Polishes the tooth to give it a smooth,
              natural-looking finish.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bonding;
