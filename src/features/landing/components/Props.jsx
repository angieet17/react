
import React from 'react';

function Avatar({ person, size }) {
  console.log(person.name, size);

  return (
    <img
    className="rounded-circle avatar"
      src={`https://i.imgur.com/${person.imageId}.jpg`}
      alt={person.name}
      width={size}
      height={size}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
    />
  );
}

export const Props = () => {
  return (
    <div>
      <Avatar
        size={200}
        person={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
      />

      <Avatar
        size={80}
        person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
      />

      <Avatar
        size={50}
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      />
    </div>
  );
};
