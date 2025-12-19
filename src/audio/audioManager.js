import { SOUNDS } from "./soundConfig";
import { CreateSoundAsync } from "@babylonjs/core";

export class AudioManager {
    constructor() {
        this.sounds = {};
    }

    async loadAllSounds() {
        for (const [name, path] of Object.entries(SOUNDS)){
            this.sounds[name] = await CreateSoundAsync(name, path);
        }
    }

    play(name){
        if (this.sounds[name]){
            this.sounds[name].play();
        }
    }
}