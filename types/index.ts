import { IEightTrackDeck } from "./8-trackdeck";
import { IAccessory } from "./Accessory";
import { IAmplifierBass } from "./Amplifier,Bass";
import { IAmplifierGuitar } from "./Amplifier,Guitar";
import { IAmplifierHeadphones } from "./Amplifier,Headphone";
import { IAmplifierIntegrated } from "./Amplifier,Integrated";
import { IAmplifierMicrophone } from "./Amplifier,Microphone";
import { IAmplifierPhono } from "./Amplifier,Phono";
import { IAmplifierPower } from "./Amplifier,Power";
import { IAmplifierPre } from "./Amplifier,Pre";
import { IADAC } from "./Analog-to-DigitalConverter(ADC)";
import { IAudioInterface } from "./AudioInterface";
import { ICable } from "./Cable";
import { ICassetteDeck } from "./CassetteDeck";
import { ICD } from "./CD";
import { IControlSurface } from "./ControlSurface";
import { ICrossover } from "./Crossover";
import { IDAC } from "./Digital-to-AnalogConverter(DAC)";
import { IDigitalRecorder } from "./DigitalRecorder";
import { IDJMixer } from "./DJMixer";
import { IDrumMachine } from "./DrumMachine";
import { IDynamics } from "./Dynamics";
import { IEffects } from "./Effect";
import { IEnclosureCasing } from "./EnclosureCasing";
import { IEQ } from "./EQ";
import { IHeadphones } from "./Headphones";
import { IInstrumentTuner } from "./InstrumentTuner";
import { IDataStorage } from "./Media&DataStorage";
import { IMediaPlayer } from "./MediaPlayer";
import { IMicrophone } from "./Microphone";
import { IMinidisc } from "./Minidisc";
import { IMixingDesk } from "./MixingDesk";
import { IPowerSupply } from "./PowerSupply";
import { IRadioReceiver } from "./RadioReceiver";
import { IRadioTuner } from "./RadioTuner";
import { IReceiver } from "./Receiver";
import { ISampler } from "./Sampler";
import { ISequencer } from "./Sequencer";
import { ISignalDistribution } from "./SignalDistribution";
import { ISpeaker } from "./Speaker";
import { IClockGenerator } from "./SynchronizerClockGenerator";
import { ISynthesizer } from "./Synthesizer";
import { ITapeMachine } from "./TapeMachine";
import { ITurntable } from "./Turntable";
import { ITurntableAccessory } from "./TurntableAccessory";
import { ITurnTableCartridge } from "./TurntableCartridge";
import { ITurntableSparePart } from "./TurntableSparePart";
import { ITurntableStylus } from "./TurntableStylus";
import { ITurntableTonearm } from "./TurntableTonearm";

export type IDevice =
    | ISynthesizer
    | IEightTrackDeck
    | IAccessory
    | IAmplifierBass
    | IAmplifierGuitar
    | IAmplifierHeadphones
    | IAmplifierIntegrated
    | IAmplifierMicrophone
    | IAmplifierPhono
    | ITurntableTonearm
    | ITurntableStylus
    | ITurntableSparePart
    | ITurnTableCartridge
    | ITurntableAccessory
    | ITurntable
    | ITapeMachine
    | IClockGenerator
    | ISpeaker
    | ISignalDistribution
    | ISequencer
    | ISampler
    | IReceiver
    | IRadioTuner
    | IRadioReceiver
    | IPowerSupply
    | IMixingDesk
    | IMinidisc
    | IMicrophone
    | IMediaPlayer
    | IDataStorage
    | IInstrumentTuner
    | IHeadphones
    | IEQ
    | IEnclosureCasing
    | IEffects
    | IDynamics
    | IDrumMachine
    | IDJMixer
    | IDigitalRecorder
    | IDAC
    | ICrossover
    | IControlSurface
    | ICD
    | ICassetteDeck
    | ICable
    | IAudioInterface
    | IADAC
    | IAmplifierPre
    | IAmplifierPower;

export const getDeviceWithInterface = (types: String[], device: any) => {
    if (types.includes("Synthesizer")) return device as ISynthesizer;
    if (types.includes("Turntable")) return device as ITurntable;
    if (types.includes("Speaker")) return device as ISpeaker;
    if (types.includes("DJ Mixer")) return device as IDJMixer;
    if (types.includes("Headphones")) return device as IHeadphones;
    if (types.includes("Sampler")) return device as ISampler;
    if (types.includes("8-track deck")) return device as IEightTrackDeck;
    if (types.includes("Signal Distribution"))
        return device as ISignalDistribution;
    if (types.includes("Effect")) return device as IEffects;
    if (types.includes("EQ")) return device as IEQ;
    if (types.includes("Turntable Accessory"))
        return device as ITurntableAccessory;
    if (types.includes("Amplifier, Pre")) return device as IAmplifierPre;
    if (types.includes("Amplifier, Power")) return device as IAmplifierPower;
    if (types.includes("Drum Machine")) return device as IDrumMachine;
    if (types.includes("Enclosure / Casing")) return device as IEnclosureCasing;
    if (types.includes("Mixing Desk")) return device as IMixingDesk;
    if (types.includes("Dynamics")) return device as IDynamics;
    if (types.includes("CD")) return device as ICD;
    if (types.includes("Audio Interface")) return device as IAudioInterface;
    if (types.includes("Instrument Tuner")) return device as IInstrumentTuner;
    if (types.includes("Turntable Cartridge"))
        return device as ITurnTableCartridge;
    if (types.includes("Digital Recorder")) return device as IDigitalRecorder;
    if (types.includes("Power Supply")) return device as IPowerSupply;
    if (types.includes("Control Surface")) return device as IControlSurface;
    if (types.includes("Media Player")) return device as IMediaPlayer;
    if (types.includes("Amplifier, Integrated"))
        return device as IAmplifierIntegrated;
    if (types.includes("Cassette Deck")) return device as ICassetteDeck;
    if (types.includes("Tape Machine")) return device as ITapeMachine;
    if (types.includes("Amplifier, Phono")) return device as IAmplifierPhono;
    if (types.includes("Cable")) return device as ICable;
    if (types.includes("Radio Receiver")) return device as IRadioReceiver;
    if (types.includes("Minidisc")) return device as IMinidisc;
    if (types.includes("Turntable Stylus")) return device as ITurntableStylus;
    if (types.includes("Turntable Tonearm")) return device as ITurntableTonearm;
    if (types.includes("Receiver")) return device as IReceiver;
    if (types.includes("Accessory")) return device as IAccessory;
    if (types.includes("Synchronizer / Clock Generator"))
        return device as IClockGenerator;
    if (types.includes("Microphone")) return device as IMicrophone;
    if (types.includes("Amplifier, Headphone"))
        return device as IAmplifierHeadphones;
    if (types.includes("Radio Tuner")) return device as IRadioTuner;
    if (types.includes("Amplifier, Guitar")) return device as IAmplifierGuitar;
    if (types.includes("Media & Data Storage")) return device as IDataStorage;
    if (types.includes("Amplifier, Microphone"))
        return device as IAmplifierMicrophone;
    if (types.includes("Crossover")) return device as ICrossover;
    if (types.includes("Turntable Spare Part"))
        return device as ITurntableSparePart;
    if (types.includes("Amplifier, Bass")) return device as IAmplifierBass;
    if (types.includes("Analog-to-Digital Converter (ADC)"))
        return device as IADAC;
    if (types.includes("Digital-to-Analog Converter (DAC)"))
        return device as IDAC;
    return device;
};
