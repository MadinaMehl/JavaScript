const data = [
    {
      id: 1,
      title: 'велосипед',
      price: 100,
    },
  
    {
      id: 2,
      title: 'самокат',
      price: 500,
    },
  
    {
      id: 3,
      title: 'сноуборд',
      price: 200,
    },
  
    {
      id: 4,
      title: 'мотоцикл',
      price: 1300,
    }
  ]

  const rootElem = document.querySelector('.root');

//   data.forEach((product) => {
//     const card = document.createElement('div');
//     const idElem = document.createElement('p');
//     const titleElem = document.createElement('p');
//     const priceElem = document.createElement('p');

//     // const id = product.id;

//     idElem.innerText = `ID: ${product.id}`;
//     titleElem.innerText = `Title: ${product.title}`;
//     priceElem.innerText = `Price: ${product.price}$`;
    

//     card.append(idElem, titleElem, priceElem);
//     rootElem.append(card);

//   });


  data.forEach(({id, title, price}) => {
    const card = document.createElement('div');
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');

    // const {id, title, price} = product;

    idElem.innerText = `ID: ${id}`;
    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}$`;
    
    card.classList.add('card');

    card.append(idElem, titleElem, priceElem);
    rootElem.append(card);

  });