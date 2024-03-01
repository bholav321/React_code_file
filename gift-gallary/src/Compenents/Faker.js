import React from 'react';
import faker from 'faker';

function FakeImageGenerator() {
  // Create an array with 100 elements
  const imageUrls = Array.from({ length: 100 }, () => faker.image.imageUrl());

  return (
    <div>
      <h1>100 Fake Images Generator</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Fake Image ${index}`} style={{ width: '150px', margin: '5px' }} />
        ))}
      </div>
    </div>
  );
}

export default FakeImageGenerator;
