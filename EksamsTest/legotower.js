let array1 = [4, 3, 3, 2, 1, 2, 2, 1, 1, 3];
let array2 = [4,4,4,4,4];

function tower(arr){ // funktion der tager imod array. 
    let towerNumber = 1; // Han er allerede igang med at bygge tårn, så den starter på 1 
    for (let i = 0; i < arr.length;i++){
        if (arr[i] < arr[i+1]){ // hvis den næste brik er større, +1 på antallet af tårne. 
            towerNumber++;
        }
    }
    return towerNumber; 
}

tower(array1);
tower(array2);