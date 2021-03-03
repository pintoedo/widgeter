import React, { useContext, useState } from 'react';
import { WidgetContext } from '../../context/WidgetContext';
import { data } from '../../data';

const NewWidget = () => {
  console.log(data, 'data');

  const { dispatch } = useContext(WidgetContext);
  const [language, setLanguage] = useState('Javascript');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_WIDGET', widget: { language, name } });
    setLanguage('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        type="text"
        placeholder="language"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
        required
      >
        {data.map((item, i) => (
          <option key={i}>{item.language} </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input type="submit" value="add widget" />
    </form>
  );
};

export default NewWidget;
