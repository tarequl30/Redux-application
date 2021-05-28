import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Products = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        setProduct(products);
      });
  }, []);
  console.log(products);
  return (
    <main>
      <Container>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          laudantium reiciendis exercitationem ex excepturi quos tenetur veniam
          ipsam? Voluptatum iusto necessitatibus illo nam sit ullam amet unde ad
          perspiciatis, nostrum possimus? Corporis, aut, mollitia, sunt autem
          dolore quae ab corrupti maiores quia beatae optio. Dignissimos qui
          voluptas veniam quo nemo officiis cupiditate laudantium, dicta nobis
          suscipit nesciunt explicabo facere aperiam, minus esse unde ullam
          itaque est quis in. Tenetur eos officiis minus numquam excepturi harum
          temporibus, necessitatibus nobis, explicabo nemo quo laudantium fugit
          laboriosam quia voluptatum doloremque aliquid incidunt minima itaque
          rerum? Assumenda architecto eligendi libero nobis quisquam tempora
          labore! Unde illo minima ullam ad quam ab, labore ut, culpa voluptas
          obcaecati atque voluptatum, adipisci animi velit quae ea? Facilis!
        </p>
      </Container>
    </main>
  );
};

export default Products;
