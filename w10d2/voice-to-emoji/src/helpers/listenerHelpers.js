import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

export const createModel = async () => {
  const URL = "http://localhost:3000/model/";
  const checkpointURL = URL + "model.json"; // model topology
  const metadataURL = URL + "metadata.json"; // model metadata

  const recognizer = speechCommands.create(
    "BROWSER_FFT", // fourier transform type, not useful to change
    undefined, // speech commands vocabulary feature, not useful for your models
    checkpointURL,
    metadataURL
  );

  // check that model and metadata are loaded via HTTPS requests.
  await recognizer.ensureModelLoaded();

  return recognizer;
};

export const listenerOptions = {
  includeSpectrogram: true, // in case listen should return result.spectrogram
  probabilityThreshold: 0.85,
  invokeCallbackOnNoiseAndUnknown: false,
  overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
};
