new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            { title: 'Item 1', qty: 0 },
            { title: 'Item 2', qty: 0 },
            { title: 'Item 3', qty: 0 }
        ],
        cart: []
    },
    methods:{
        addItem: function(index){
            this.total += 9.99;
            var item = this.items[index];
            this.cart.push({
                title: item.title,
                qty: 1
            });
        }
    }
});