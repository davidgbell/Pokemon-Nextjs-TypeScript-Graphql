import React, { useState, FormEvent } from 'react';

type Props = {
  term: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearInput: () => void;
};

export const Search = ({
  term,
  handleInputChange,
  handleClearInput,
}: Props) => {
  return (
    <form className='search' role='search'>
      <label className='hidden' htmlFor='search'>
        Search Pokemon
      </label>
      <input
        type='search'
        id='search'
        name='search'
        aria-label='Enter your search term'
        value={term || ''}
        placeholder='search pokemon'
        onChange={handleInputChange}
      />
      <button onClick={handleClearInput}>Clear</button>
    </form>
  );
};
