let mapOptions1 = {
    center:[45.804103, 15.859725],
    zoom:20
}

let map1 = new L.map('map1', mapOptions1);


let layer1 = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
map1.addLayer(layer1)




let mapOptions2 = {
    center:[44.112655, 15.255262],
    zoom:20
}

let map2 = new L.map('map2', mapOptions2);


let layer2 = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
map2.addLayer(layer2)




let mapOptions3 = {
    center:[44.765168, 19.215766],
    zoom:20
}

let map3 = new L.map('map3', mapOptions3);


let layer3 = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
map3.addLayer(layer3)



let mapOptions4 = {
    center:[43.381395, 17.584117],
    zoom:20
}

let map4 = new L.map('map4', mapOptions4);


let layer4 = new L.TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png')
map4.addLayer(layer4)