var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://cdn.nguyenkimmall.com/images/detailed/567/10040770-dien-thoai-iphone-7-plus-mnqm2vna-32gb-black-1.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy s7',
        image: 'https://www.gizmochina.com/wp-content/uploads/2016/09/samsung-galaxy-s7-usa1.jpg',
        description: 'Sản phẩm do samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo fis',
        image: 'https://vn-test-11.slatic.net/p/965192c0d3590559b57b5a9388e6703d.jpg',
        description: 'Sản phẩm do oppo sản xuất',
        price: 450,
        inventory: 5,
        rating: 5
    }
];
const products = (state = initialState, action) =>{
    switch(action.type){
        default: return state;
    }
}
export default products;