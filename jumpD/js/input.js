function makeKeys(scene) {
    let keys = scene.input.keyboard.addKey('W');
    console.log(keys);
    return keys;
}

function getKeysDown(keys) {
    downKeys = []
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].isDown) {
            downKeys.append(keys[i]);


        }
    }
    return downKeys;
}