import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      {/* <img src="/images/01.jpg" alt="image 01" width="1920" height="1080" />
      <img src="/images/02.jpg" alt="image 02" width="1920" height="1080" />
      <img src="/images/03.jpg" alt="image 03" width="1920" height="1080" />
      <img src="/images/04.jpg" alt="image 04" width="1920" height="1080" />
      <img src="/images/05.jpg" alt="image 05" width="1920" height="1080" /> */}

      {[1, 2, 3, 4, 5].map((img) => (
        <Image
          key={img}
          src={`/images/${img}.jpg`}
          alt=""
          width="1920"
          height="1080"
        />
      ))}
    </div>
  );
};

export default GalleryPage;
