// Prototype Inheritance (Object.create)
const binarySearchTree = {
    init: function() {
        this.value = value;
        this.left = null;
        this.right = null;
    },
    insert: function() {
        console.log(this.init);
        return this;
    },
    contains: function() {
        console.log('Contains');
        return this;
    },
    remove: function() {
        console.log('Remove');
        return this;
    }
};

const test = Object.create(binarySearchTree, );

console.log(test.insert(1));

// Factory approach (composition)
const inserter = (state) => ({
    insert: () => console.log(state.name)
});







