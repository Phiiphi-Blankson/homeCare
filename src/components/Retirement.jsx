/** @format */

import { Button, Input } from '@material-tailwind/react';
import { useState } from 'react';
const Retirement = () => {
  const homes = [
    {
      id: 1,
      address: 'Taxi Rank',
      location: 'Madina',
      houseNum: 'GM-098-8667',
      description: 'This is a beautiful home in New York.',
    },
    {
      id: 2,
      address: 'Fire Stone',
      location: 'Atomic',
      description: 'This is a beautiful home in New York.',
    },
    {
      id: 3,
      address: 'East Legon',
      location: 'America House',
      description: 'This is a beautiful home in New York.',
    },
    {
      id: 4,
      address: 'Wass',
      location: 'Adenta',
      description: 'This is a beautiful home in New York.',
    },
    {
      id: 5,
      address: 'Aburi street',
      location: 'Aburi',
      description: 'This is a beautiful home in New York.',
    },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredHomes = homes.filter((home) => {
    return home.location.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const handleBtn = () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-96 mb-10 bg-[url('https://images.pexels.com/photos/1125272/pexels-photo-1125272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <h3 className="text-6xl">Search for Retirement Homes</h3>
      <div className="max-w-96 flex gap-4 mt-10">
        <Input
          label="search"
          placeholder="search"
          onChange={handleSearch}
          className="border-white text-white"
        />
        <Button onClick={handleBtn} className="text-white">
          search
        </Button>
      </div>
      <div className="flex gap-4 flex-wrap mt-10">
        {filteredHomes.map((home) => (
          <div
            key={home.id}
            className={`bg-gray-200 p-4  ${searchTerm ? 'block' : 'hidden'}`}
          >
            <h2>{home.address}</h2>
            <p>{home.houseNum}</p>
            <p>{home.location}</p>
            <p>{home.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Retirement;
