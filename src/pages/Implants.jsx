/** @format */

import { Button, Carousel } from '@material-tailwind/react';

const Implants = () => {
  return (
    <>
      <section className='min-h-[calc(100vh-70px-40px)] bg-no-repeat bg-cover object-cover bg-[url("https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
        <div className="bg-gradient-to-tr w-full h-[748px]  from-blue-gray-700 to-transparent flex items-center">
          <div className="max-w-xl pl-60">
            <h1 className="text-5xl">Need to know more about Implants?</h1>
            <p>
              A dental implant is a titanium post that is surgically inserted
              into the jawbone to act as an artificial tooth root. Once the
              implant is securly in place and the bone has fused around it (a
              process called osseointegration), a crown, badge, or denture is
              attached to the implant to replace the missing tooth or teeth.
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
      <section className="flex flex-col space-y-20 justify-center items-center min-h-[80vh] py-10 bg-blue-gray-200">
        <div className="flex items-center">
          <h3 className="text-5xl font-extrabold max-w-2xl">
            Benefits of Dental Implants
          </h3>
        </div>
        <div className="flex space-x-10">
          <div className="bg-blue-100 p-10 rounded-2xl max-w-sm shadow">
            <div className="inline-flex rounded-full">
              <img
                src="https://media.istockphoto.com/id/528683755/photo/senior-woman-in-the-dental-office.jpg?s=1024x1024&w=is&k=20&c=jSu34HBprc-QDoVs8hfmLco_50szNdD9wdhoQT6NevY="
                alt=""
                className="rounded-3xl max-w-[310px] h-[300px]"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Natural Look and Feel</h4>
            <p className="mt-3">
              Implants are designed to look, feel and function like natural
              teeth, providing a seemless appearance and restoring full chewing
              power.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-blue-100 p-10 rounded-2xl max-w-sm shadow">
            <div className="inline-flex rounded-full">
              <img
                src="https://images.pexels.com/photos/3845856/pexels-photo-3845856.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="rounded-3xl max-w-[310px] h-[300px]"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Improved Oral Health</h4>
            <p className="mt-3">
              Unlike Traditional bridges which require grinding down adjacent
              teeth, implants do not affect surrounding teeth, preserving more
              of your natural tooth structure.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>

          <div className="bg-blue-100 p-10 rounded-2xl max-w-sm shadow">
            <div className="inline-flex rounded-full">
              <img
                src="https://images.pexels.com/photos/3845942/pexels-photo-3845942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="rounded-3xl w-[600px] h-[300px]"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Bone Health Preservation</h4>
            <p className="mt-3">
              Dental implants stimulate the jawbone, preventing bone loss that
              often occurs after a tooth is lost. This helps maintain facial
              structure and prevents the "sunken" appearance often seen in
              denture wearers.
            </p>
            <Button className="mt-3 lowercase">See more</Button>
          </div>
        </div>
      </section>

      <h3 className="text-5xl p-8">The Dental Implant Procedure</h3>

      <section className="flex justify-center space-x-20 items-center min-h-[80vh]">
        <div className="">
          <img
            src="https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="rounded-3xl max-w-[4500px] h-[500px] object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/5816286/pexels-photo-5816286.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Initial Consultation</h4>
            <p className="mt-3">
              A comprehensive dental exam, including X-rays and possibly 3D
              imaging is conducted to assess the condition of the jawbone and
              create a treatment plan.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Implant Placement</h4>
            <p className="mt-3">
              The implant is surgically placed into the jawbone under local
              anesthesia. Over the next few months, the implant will ingtegrate
              with the bone.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://images.pexels.com/photos/12148417/pexels-photo-12148417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="size-25 rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Abutment Placement</h4>
            <p className="mt-3">
              Once the implant has fused with the bone, an abutment (a connector
              piece) is attacched to the implant. This serves as the base for
              the new tooth.
            </p>
          </div>
          <div className="bg-blue-50 p-5 rounded-2xl max-w-xs shadow text-center">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/654245404/photo/dental-technician-is-working-with-porcelain-teeth-in-a-cast-molde-in-dental-laboratory.jpg?s=1024x1024&w=is&k=20&c=wQcvawUtqVKRiGLjjLjdAK52LyBFxvL4GomNBh_htpE="
                alt=""
                className="rounded-full size-25"
              />
            </div>
            <h4 className="text-xl font-bold mt-3">Crown Placement</h4>
            <p className="mt-3">
              After the gums heal around the abutment, a custom-made crown (or
              brideg/denture) is attached, completing the restoration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Implants;
