/** @format */
import { Button, Carousel } from '@material-tailwind/react';
import { FaTooth } from 'react-icons/fa';
import { GiScrew } from 'react-icons/gi';
import { GiTooth } from 'react-icons/gi';
import { GiSaberTooth } from 'react-icons/gi';
import { GiQueenCrown } from 'react-icons/gi';
import { TbAtom } from 'react-icons/tb';

const Whitening = () => {
  return (
    <>
      <section className='min-h-[calc(100vh-70px-40px)] bg-no-repeat bg-cover object-cover bg-[url("https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
        <div className="bg-gradient-to-tr w-full h-[748px]  from-yellow-200 to-transparent flex items-center">
          <div className="max-w-xl pl-60">
            <h1 className="text-5xl">
              Hey there! Optimize your dental well-being with us!
            </h1>
            <p>
              Teeth whitening is a popular cosmetic dental procedure designed to
              lighten the colour of teeth and remove stains or discoloration.
              It's one of the most commonly requested treatments for enhancing a
              smile's appearance.
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
            Types of Teeth Whitening
          </h3>
        </div>
        <div className="flex space-x-10">
          <div className="bg-yellow-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>In-Office Professional Whitening:</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Performed by the dentist, in-office whitening uses stronger
              bleaching agents like hydrogen peroxide or carbonate peroxide.
              Thid treatment delivers fast, dramatic results and suitable for
              patients looking for quick and effective solution.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-yellow-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>At Home Professional Whitening Kites:</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              Dentists can provide custom-made trays and professional-strength
              whitenming gels for at-home use. These kits offer more gradual
              whitening compared to in-office treatments but are still more
              effective than over-the-counter options.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-yellow-50 p-10 rounded-2xl max-w-sm shadow">
            <h3>Over-the-Counter Whitening Products:</h3>
            <p className="mt-3 space-x-10 font-serif text-4xl">
              These are available without a presciption and include whitening
              strips, toothpaste, mouthwashes and gels. They are generally less
              effective than professional treatments and may take longer to see
              noticeable results. Types: Whitening Toothpaste, Whitening Strips
              and Whitening Strips.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
        </div>
      </section>

      <section className="flex justify-center space-x-20 items-center min-h-[80vh]">
        <div className="ml-6 font-sans space-y-10">
          <h3 className="font-extrabold">Ways to maintain White teeth</h3>
          <p>
            <span className="font-extrabold"> Good Oral Hygiene:</span> Brush
            twice daily, floss regularly and use mouthwash to maintain oral
            health and cleanliness.
          </p>

          <p>
            <span className="font-extrabold">
              Avoid Staining Foods and Drinks:
            </span>
            Limit consumption of coffee, tea, red wine and dark-coloured foods
            that can stain teeth. If consumed, use a straw to minimize contact
            with teeth.
          </p>

          <p>
            <span className="font-extrabold"> Avoid Tobacco: </span>Smooking or
            using tobacoo can reverse whitening results and contribute to
            further staining.
          </p>

          <p>
            <span className="font-extrabold">Touch-Ups:</span>
            Depending on the method used, periodic touch-ups may be required to
            maintain your desired level of whiteness.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-8">
          <div className="bg-brown-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Improves Appearance</h4>
            <p className="mt-3">
              Whitening can dramatically enhance the appearance of your smile,
              making teeth look brighter and healthier.
            </p>
          </div>
          <div className="bg-brown-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/1204178247/photo/3d-render-of-dental-bonded-retainer-on-lower-jaw.jpg?s=2048x2048&w=is&k=20&c=gjnYl1NourKL186QmoywmH7Y9M7_ryAlNEayqJv4iMg="
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Boosts Confidence:</h4>
            <p className="mt-3">
              Awhiter smile can increase self-confidence and make you feel more
              attractive in social and professional situations.
            </p>
          </div>
          <div className="bg-brown-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/988195822/photo/close-up-macro-photo-of-metall-amalgam-dental-fillings.jpg?s=1024x1024&w=is&k=20&c=2s2JIoj-7HBZNndENFcZHkBASXmg4bn-isdORlsZLGM="
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Quick and Non-Invasive</h4>
            <p className="mt-3">
              Whitening is a relatively quick cosmetic treatment with no
              downime, making it an eassy option for enhancing your smile.
            </p>
          </div>
          <div className="bg-brown-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/6627606/pexels-photo-6627606.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="rounded-full size-25"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Customizable</h4>
            <p className="mt-3">
              Professional treatments vcan be tailored to your needs, providing
              different levels of whitening depending on your preferences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitening;
