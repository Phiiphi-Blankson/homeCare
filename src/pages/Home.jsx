/** @format */

import { Button, Carousel } from '@material-tailwind/react';
import { FaTooth } from 'react-icons/fa';
import { GiScrew } from 'react-icons/gi';
import { GiTooth } from 'react-icons/gi';
import { GiSaberTooth } from 'react-icons/gi';
import { GiQueenCrown } from 'react-icons/gi';
import { TbAtom } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className='min-h-[calc(100vh-70px-40px)] bg-no-repeat bg-cover object-cover bg-[url("https://images.pexels.com/photos/3779713/pexels-photo-3779713.jpeg?auto=compress&cs=tinysrgb&w=800")]'>
        <div className="bg-gradient-to-tr w-full h-[748px]  from-pink-400 to-transparent flex items-center">
          <div className="max-w-xl pl-60">
            <h1 className="text-5xl">
              Hey there! Optimize your dental well-being with us!
            </h1>
            <p>
              Welcome to the realm of Precision Dentistry, meticulously tailored
              just for you. Experience expert acre with such a gentle touch, as
              we embark on your journey to optimal oral health. At the heart of
              our commitment lies the transformationof smiles, boosting
              confidence one tooth at a time.
            </p>
            <div className=" mt-5 space-x-5">
              <Link to="https://calendly.com/phiiphiblankson/book-a-schedule-with-us">
                <Button className="rounded-full">Book a Schedle</Button>
              </Link>
              <Link to="/contacts">
                <Button
                  className="rounded-full"
                  variant="outlined"
                  color="white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-20 justify-center items-center min-h-[80vh] py-10">
        <div className="flex items-center">
          <h3 className="text-5xl font-extrabold max-w-2xl">
            You can get the highest quality services here
          </h3>
          <p className="text-gray-600 max-w-xs">
            We can only best quality material on the market in order to probvide
            the best products to our patients
          </p>
        </div>
        <div className="flex space-x-10">
          <div className="bg-pink-300 p-10 rounded-2xl max-w-sm shadow">
            <div className="p-5 bg-white inline-flex rounded-full">
              <GiScrew className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Dental Implants</h4>
            <p className="mt-3">
              It provides an effective solution for replacing missing teeth,
              particularly for elderly patients, including those living in
              Retirement Homes.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
          <div className="bg-pink-300 p-10 rounded-2xl max-w-sm shadow">
            <div className="p-5 bg-white inline-flex rounded-full">
              <FaTooth className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Emergency Dentistry</h4>
            <p className="mt-3">
              We provide immediate dental care to address urgent oral health
              issues that require prompt attention to alleviate pain, prevent
              further damage, or manage potentially serious conditions.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
          <div className="bg-pink-300 p-10 rounded-2xl max-w-sm shadow">
            <div className="p-5 bg-white inline-flex rounded-full">
              <GiTooth className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Root Canal Treatment</h4>
            <p className="mt-3">
              A procedure used to treat infection or damage inside a tooth. it
              often necessary when the tooth's pulp, which contains nerves and
              blood versels, becomes infected or inlfamed.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center space-x-20 items-center min-h-[80vh]">
        <div className="">
          <img
            src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="rounded-3xl max-w-[450px] h-[400px] object-cover"
          />
        </div>
        <div className="max-w-xl">
          <h3 className="text-5xl font-bold">
            You have lots of reasons to choose us
          </h3>
          <p className="mt-10 text-xl text-gray-600">
            We use only the best quality materials on the market in order to
            provide the best products to our patients. We provide comprehensive
            health care, preventive health management, compliance with health
            standards, residents and family satisfaction and Specialised care
            for Geriatic patients
          </p>

          <Button className="bg-pink-400 lowercase mt-3">see more</Button>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center">
        <div className="">
          <h2 className="text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-md mt-8">
            We use only the best quality materials on the market in order to
            provide .
          </p>
          <ul className="mt-14 space-y-5 list-disc">
            <li>
              <p className="text-lg">On-Site Dental Care</p>
            </li>
            <li>
              <p className="text-lg">
                Partnerships with Local Dental Practices
              </p>
            </li>
            <li>
              <p className="text-lg">Specialized Geriatic Dental Care</p>
            </li>
            <li>
              <p className="text-lg">Preventive and Educational Programs</p>
            </li>
            <li>
              <p className="text-lg">Emergency Dental Care</p>
            </li>
            <li>
              <p className="text-lg">Cost Considerations</p>
            </li>
          </ul>
          <Button className="mt-8 bg-pink-400">view more</Button>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-pink-300 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="p-5 bg-white inline-flex rounded-full">
              <GiScrew className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Dental Implants</h4>
            <p className="mt-3">
              Dental implants are a permanent solution for missing teeth. A
              titanium post is surgically implanted into the jawbone, which then
              fuses with the bone over time. A custom-made crown is attached to
              the post, creating a natural-looking and feeling tooth. Implants
              can last a lifetime with proper care and are ideal for those who
              want a long-term solution for tooth loss.
            </p>
          </div>
          <div className="bg-pink-300 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="p-5 bg-white inline-flex rounded-full">
              <TbAtom className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Bonding</h4>
            <p className="mt-3">
              Dental bonding is a quick and affordable procedure that involves
              applying a tooth-colored resin to repair chipped, cracked, or
              discolored teeth. The resin is molded and shaped to match the
              surrounding teeth, then hardened with a special light. Bonding is
              a great option for minor cosmetic issues, but may not be suitable
              for more extensive repairs.
            </p>
          </div>
          <div className="bg-pink-300 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="p-5 bg-white inline-flex rounded-full">
              <GiSaberTooth className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Whitening</h4>
            <p className="mt-3">
              Teeth whitening is a non-invasive, pain-free procedure that can
              brighten your smile by up to 10 shades. Using a gentle bleaching
              agent, whitening treatments can remove stains and discoloration,
              leaving your teeth looking radiant and healthy. In-office
              whitening treatments typically take around an hour, while at-home
              whitening kits can be used over a period of weeks
            </p>
          </div>
          <div className="bg-pink-300 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="p-5 bg-white inline-flex rounded-full">
              <GiQueenCrown className="size-10" />
            </div>
            <h4 className="text-xl font-bold mt-3">Crowns</h4>
            <p className="mt-3">
              Dental crowns are custom-made caps that cover the entire tooth,
              restoring its shape, size, and color. Crowns can be used to repair
              teeth that are damaged, decayed, or discolored. Made from
              porcelain, ceramic, or gold, crowns are durable and long-lasting,
              with a lifespan of up to 15 years.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-20 py-20 justify-center items-center min-h-[70vh]">
        <div className="flex items-center">
          <h3 className="text-5xl font-extrabold max-w-2xl">
            You can get the highest quality services here
          </h3>
          <p className="text-gray-600 max-w-xs">
            we can only best quality material on the market in order to probvide
            the best products to our patients
          </p>
        </div>
        <div>
          <Carousel className="rounded-xl w-[800px]">
            <div className="border border-black p-4 rounded-xl">
              <img
                src="https://images.pexels.com/photos/3779697/pexels-photo-3779697.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="object-cover rounded-xl"
                alt=""
              />
              <p className="text-2xl font-bold mt-2">Dental Implants</p>
              <p className="mt-2 ">Dental Implant Specialist</p>
            </div>
            <div className="border border-black p-4 rounded-xl">
              <img
                src="https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="object-cover rounded-xl"
                alt=""
              />
              <p className="text-2xl font-bold mt-2">Dental Implants</p>
              <p className="mt-2 ">Dental Implant Specialist</p>
            </div>
            <div className="border border-black p-4 rounded-xl">
              <img
                src="https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="object-cover rounded-xl"
                alt=""
              />
              <p className="text-2xl font-bold mt-2">Dental Implants</p>
              <p className="mt-2 ">Dental Implant Specialist</p>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Home;
