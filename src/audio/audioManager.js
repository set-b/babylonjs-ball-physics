import { SOUNDS } from "./soundConfig";
import { CreateAudioEngineAsync, CreateSoundAsync } from "@babylonjs/core";

export class AudioManager {
    constructor(audioEngine) {
        this.audioEngine = audioEngine;
        this.sounds = {};
    }

    static async create() {
        const audioEngine = await CreateAudioEngineAsync();
        const manager = new AudioManager(audioEngine);
        await manager.loadAllSounds();
        await audioEngine.unlockAsync();
        return manager;
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