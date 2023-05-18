import React from "react";
import ImageFile from "./ImageItem";

export default function ImageList({ imageList }) {
  console.log(imageList);
  return (
    <ul>
      {imageList.map((item) => {
        // return안의 값은 각각의 li들을 리턴해야함
        return (
          <li key={item.id}>
            <ImageFile img={item} />
          </li>
        );
      })}
    </ul>
  );
}