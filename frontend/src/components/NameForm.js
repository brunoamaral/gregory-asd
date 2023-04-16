import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

const NameForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [firstNameSuggestions, setFirstNameSuggestions] = useState([]);
  const [lastNameSuggestions, setLastNameSuggestions] = useState([]);
  const [authorId, setAuthorId] = useState(null);

  const fetchFirstNameSuggestions = async (query) => {
    if (query.length >= 3) {
      const response = await axios.get(`${API_URL}/authors/first_names/?q=${query}`);
      setFirstNameSuggestions(response.data);
    } else {
      setFirstNameSuggestions([]);
    }
  };

  const fetchLastNameSuggestions = async (query) => {
    if (query.length >= 3) {
      const response = await axios.get(`${API_URL}/authors/last_names/?q=${query}`);
      setLastNameSuggestions(response.data);
    } else {
      setLastNameSuggestions([]);
    }
  };

  const handleFirstNameClick = (name) => {
    setValue('firstName', name);
    setFirstNameSuggestions([]);
  };
  const handleLastNameClick = (name) => {
    setValue('lastName', name);
    setLastNameSuggestions([]);
  };

  const fetchAuthorId = async (first_name, last_name) => {
    if (first_name && last_name) {
      try {
        const response = await axios.get(`${API_URL}/get_author_id/`, {
          params: {
            first_name: first_name,
            last_name: last_name,
          },
        });
        setAuthorId(response.data.author_id);
      } catch (error) {
        console.error(error);
        setAuthorId(null);
      }
    } else {
      setAuthorId(null);
    }
  };


  const onSubmit = (data) => {
    // Process the data
    console.log(data);
    fetchAuthorId(data.firstName, data.lastName);

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="flex flex-col space-y-2">
      <label htmlFor="firstName" className="font-bold">First Name:</label>
      <input
        id="firstName"
        type="text"
        {...register('firstName')}
        onChange={(e) => fetchFirstNameSuggestions(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <ul className="space-y-1">
        {firstNameSuggestions.map((name, index) => (
            <li
            key={index}
            className="bg-gray-100 px-3 py-1 rounded cursor-pointer hover:bg-gray-200"
            onMouseDown={() => handleFirstNameClick(name)}
          >
            {name}
          </li>
      ))}
      </ul>
    </div>
    <div className="flex flex-col space-y-2">
      <label htmlFor="lastName" className="font-bold">Last Name:</label>
      <input
        id="lastName"
        type="text"
        {...register('lastName')}
        onChange={(e) => fetchLastNameSuggestions(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <ul className="space-y-1">
        {lastNameSuggestions.map((name, index) => (
            <li
            key={index}
            className="bg-gray-100 px-3 py-1 rounded cursor-pointer hover:bg-gray-200"
            onMouseDown={() => handleLastNameClick(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      Submit
    </button>
      {authorId && (
        <p className="mt-4 text-xl font-bold">
          Author ID: <span className="text-blue-600">{authorId}</span>
        </p>
      )}
      </form>
  
  );
};

export default NameForm;
