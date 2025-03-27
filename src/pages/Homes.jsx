import React from 'react';
import { links } from '../data/data';
import { Link } from 'react-router-dom';

export const Homes = () => {
  return (
    <>
      <section className="border-2 shadow-lg m-6 p-6">
        <h1>This is your homepage</h1>
        <br />
        <div className=" grid grid-cols-3  gap-4 ">
          {links.map((link) => {
            return (
              <Link
                to={link.url}
                key={link.id}
                style={{ backgroundColor: `${link.color}` }}
              >
                <article className='p-4'>
                  <h2 className="font-normal text-base p-2 mb-3">
                    <span className="block text-3xl mb-2">{link.icon}</span>
                    {link.title}
                  </h2>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
