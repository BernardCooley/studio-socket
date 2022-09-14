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
    | ISynthesizer
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
