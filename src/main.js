import { createScene } from "./scene";
import { Engine, CreateAudioEngineAsync } from "@babylonjs/core";
import { AudioManager } from "./audio/audioManager";

const canvas = document.getElementById("renderCanvas");
const engine = new Engine(canvas, true);

const audioEngine = await CreateAudioEngineAsync();
const audioManager = new AudioManager(audioEngine);
audioManager.loadAllSounds();
await audioEngine.unlockAsync();

const scene = await createScene(engine, canvas, audioManager);

engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());