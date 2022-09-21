const url = "http://localhost:3001/categories";

export const getCategories = (onSuccess,onFinish) =>
    fetch(url)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);

export const getCategory = (id,onSuccess,onFinish) =>{
  fetch(`${url}?id=${id}`)
    .then(response => response.json())
    .then(onSuccess)
    .finally(onFinish);
}

export const httpAddCategory = (Category,onSuccess,onFinish) => 
fetch(url,{
    method: 'POST',
    headers:{ 
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
    body: JSON.stringify(Category),
  }).then((data) => data.json())
  .then(onSuccess)
  .finally(onFinish)

export const httpEditCategory = (id,Category,onSuccess,onFinish) => 
  fetch(`${url}/${id}`,{
            method: 'PUT',
            headers:{ 
                'Accept': 'application/json',
                'Content-Type':'application/json'
              },
            body: JSON.stringify(Category),
          }).then((data) => data.json())
          .then(onSuccess)
          .finally(onFinish)

export const httpDeleteCategory = (id) =>
fetch(`${url}/${id}`,{
        method: 'DELETE',
    }).then((data) => data.json())