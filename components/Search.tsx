import React, { useState, FormEvent } from 'react';

type Props = {
  term: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ term, handleInputChange }: Props) => {
  return (
    <form role='search'>
      <label htmlFor='search'>Search Pokemon</label>
      <input
        type='search'
        id='search'
        name='search'
        aria-label='Enter your search term'
        value={term || ''}
        placeholder='search pokemon'
        onChange={handleInputChange}
      />
    </form>
  );
};
