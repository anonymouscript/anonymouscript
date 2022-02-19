function makeKeys(ks) {
    let keys = [];
    for (let i = 0; i < ks.length; i++) {
        const kname = ks[i];
        let newKey = scene.input.keyboard.addKey(kname);
        keys.push(newKey);
        keys[ks[i]] = newKey;
    }
    console.log(keys);
    return keys;
}

function getKeysDown(keys) {
    downKeys = []
    for (var i = 0; i < keys.length; i++) {
        if (keys[i].isDown) {
            downKeys.push(keys[i]);



        }
    }
    return downKeys;
}