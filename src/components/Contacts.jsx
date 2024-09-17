/** @format */

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from '@material-tailwind/react';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='flex justify-center p-20 bg-[url("https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="white">
          Contact Us
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="white"
              className="-mb-3 border-white"
            >
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="h6" color="white" className="-mb-3">
              Message
            </Typography>
            <Textarea
              type="text"
              size="lg"
              placeholder="Enter your message..."
              className=" !border-t-white-200 focus:!border-t-white-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button className="mt-6 bg-white text-black" fullWidth type="submit">
            send message
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default Contact;
