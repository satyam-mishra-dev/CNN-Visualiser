# CNN Audio Visualizer

**Live demo: https://cnn-visualiser.vercel.app** · Write-up: https://satyam-mishra-dev.tech/projects/cnn-visualiser

Upload a WAV file and see what a convolutional neural network hears: the top three predictions with confidence, the mel spectrogram the model actually looks at, the waveform, and the feature maps of every convolutional layer.

## How it works

- **Model** (`model.py`): a ResNet-style CNN in PyTorch: a 7x7 stem, then residual blocks in a 3, 4, 6, 3 layout, classifying 50 everyday sounds from the ESC-50 dataset.
- **Audio**: resampled to 44.1 kHz and turned into a 128-band mel spectrogram.
- **Training** (`train.py`): frequency and time masking, mixup, label smoothing, AdamW and a one-cycle learning-rate schedule, 100 epochs, fold 5 held out for validation, on a Modal A10G GPU.
- **Inference** (`main.py`): a FastAPI endpoint on Modal that returns the predictions and every intermediate activation.
- **Front end** (`audio-cnn-visualisation/`): Next.js and Tailwind, drawing each activation as a heatmap.

## Run it

```bash
pip install -r requirements.txt
modal run train.py      # train on Modal
modal deploy main.py    # deploy the inference endpoint
cd audio-cnn-visualisation && npm install && npm run dev
```

The first request after a quiet period can take around 30 seconds while the GPU container starts.

Built by [Satyam Mishra](https://satyam-mishra-dev.tech).
