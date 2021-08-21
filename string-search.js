const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'Dell yellow laptop with black camera',
    '1x59 Lenovo commercial yoga Laptop',
    'Dell LG supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

const searching = "Dell";
// indexOf------------------------

const output = [];
for (product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product);
    }
}

// includes---------------------

for (product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        // output.push(product);
    }
}



for (product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}



console.log(output)