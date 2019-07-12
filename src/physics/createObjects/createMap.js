import {materialEnd, materialStart, materialNormal, startPoint, endPoint} from '../physicsConstructor';
import createPlane from './createPlane';

function createMap(map) {
    for(var i = 0; i < map.length; i += 1) {
        switch(map[i][6]) {
            case 1:
                // console.log(materialNormal);
                createPlane(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], materialNormal);
                break;
            
            case 2:
                createPlane(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], materialStart);
                break;

            case 3:
                createPlane(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], materialEnd);
                break;

            case 4:
                createPlane(map[i][0], map[i][1], map[i][2], map[i][3], map[i][4], map[i][5], materialEnd);
                break;
        }
    }
}

export default createMap;