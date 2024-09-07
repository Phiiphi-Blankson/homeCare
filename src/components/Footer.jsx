/** @format */

import { Typography } from '@material-tailwind/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const LINKS = [
  {
    title: 'Product',
    items: ['Overview', 'Features', 'Solutions', 'Tutorials'],
  },
  {
    title: 'Company',
    items: ['About us', 'Careers', 'Press', 'News'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
  {
    title: 'Resource',
    items: ['Blog', 'Newsletter', 'Events', 'Help center'],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-4">
          <div className="col-span-1">
            <Typography variant="h5" className="mb-6">
              3bit Dental Care
            </Typography>
            <div className="flex space-x-5">
              <FaInstagram className="size-6" />
              <FaTwitter className="size-6" />
              <FaYoutube className="size-6" />
            </div>
          </div>
          <div className="grid grid-cols-4 col-span-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{' '}
            <a href="https://material-tailwind.com/">3bit Dental Care</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
