import React from 'react';

export default function Content({ isOpen }) {
  return (
    <div
      className='content'
      style={{
        padding: '10px',
        backgroundColor: 'rgb(228, 228, 228)',
        gridColumn: isOpen ? '2 / 4' : '1 /4',
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
        libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
        eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
        consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
        sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
        libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
        eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
        consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
        sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
        libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
        eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
        consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
        sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
        libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
        eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
        consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
        sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt cum
        libero distinctio! Nobis magni eius, perspiciatis laudantium temporibus
        eligendi vel iure incidunt rerum repudiandae nesciunt tempora a
        consectetur amet alias in, ab sed quasi aliquam? Rerum error vitae
        sapiente quo ab. Autem vitae nisi illum aut deleniti facere in?
      </p>
      <br />
    </div>
  );
}
