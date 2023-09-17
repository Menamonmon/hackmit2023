import { useReducer } from "react";

type ReturnedSig = {
  recorder: MediaRecorder | null;
  start: () => Promise<void>;
  stop: () => void;
  isRecording: boolean;
  error: Error | null;
};

type State = {
  isRecording: boolean;
  recorder: MediaRecorder | null;
  data: Blob | null;
  error: Error | null;
};

type Actions =
  | { type: "start" }
  | { type: "startRecording"; payload: { recorder: MediaRecorder } }
  | { type: "stop" }
  | { type: "hasError"; payload: { error: Error | null } };

const initState: State = {
  isRecording: false,
  recorder: null,
  data: null,
  error: null,
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "start":
      return { ...state, isRecording: true };
    case "stop":
      return { ...state, isRecording: false };
    case "startRecording":
      return { ...state, isRecording: true, recorder: action.payload.recorder };
    case "hasError":
      return { ...state, isRecording: false, error: action.payload.error };
    default:
      return state;
  }
};

async function convertBlobToBase64(blob: Blob) {
  return new Promise<string>((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

export const useVoiceRecorder = (cb: (result: string) => void): ReturnedSig => {
  const [state, dispatch] = useReducer(reducer, initState);

  const finishRecording = async ({ data }: { data: Blob }) => {
    cb(await convertBlobToBase64(data));
  };

  const start = async () => {
    try {
      if (state.isRecording) return;
      dispatch({ type: "start" });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      dispatch({ type: "startRecording", payload: { recorder } });
      recorder.start();
      recorder.addEventListener("dataavailable", finishRecording);
      if (state.error) dispatch({ type: "hasError", payload: { error: null } });
    } catch (err) {
      dispatch({ type: "hasError", payload: { error: err as Error } });
    }
  };

  const stop = () => {
    try {
      const recorder = state.recorder;
      dispatch({ type: "stop" });
      if (recorder) {
        if (recorder.state !== "inactive") recorder.stop();
        recorder.removeEventListener("dataavailable", finishRecording);
      }
    } catch (err) {
      dispatch({ type: "hasError", payload: { error: err as Error } });
    }
  };

  return {
    start,
    stop,
    recorder: state.recorder,
    isRecording: state.isRecording,
    error: state.error,
  };
};