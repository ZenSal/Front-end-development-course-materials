

var names = ["Magesh","Zen","Ghost","Magi","Ajumma","Mineso","Marin","joe","kim","jin-goo","conan"];
console.log(names[2]);
console.log(names);
names.pop(); //pop deletes the last data stored in the array
console.log(names);
console.log(names.length);
names.splice(names.length-2,2); // it is used to delete a specific data from the array, 
                   //by giving the indexvalue and the how many need to be delted
console.log(names);

names.pop();
names[2]="Koji";
names.splice(2, 0, "John"); // adding  the value based on the index position
console.log(names);

var arrays= [
                ["Magi","sal"],
                ["leo","jog"],
                ["kim","clark"],
                [{}]
            ];
console.log(arrays);
console.log(arrays[0],[0]);
console.log(arrays[1],[1]);

const part = [2,3,4,5,6,7,8];
console.log(part.slice(1,part.length-1));
console.log(part.slice(1,5));
