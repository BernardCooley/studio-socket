export interface IAmplifierBass {
    country_of_manufacture: string;
    dimensions: Dimension[];
    channels_voices_tracks: ChannelsVoicesTrack[];
    dates_produced: string;
    title: string;
    controls: Control[];
    slug: string;
    connections: Connection[];
    displays_indicators_meters: DisplaysIndicatorsMeter[];
    external_links: ExternalLink[];
    form_factor: string;
    id: number;
    power_source: string;
    signal_path: string;
    manufacturers: string[];
    deviceTypes: string[];
}

export interface ChannelsVoicesTrack {
    type: string;
    additional_information: string;
    quantity: number;
}

export interface Connection {
    connector: string;
    description: string[];
    name: string;
}

export interface Control {
    range: string;
    parameter: string;
    control_type: ControlType;
}

export enum ControlType {
    RotaryPot = "Rotary Pot",
    SlidePot = "Slide Pot",
    ToggleSwitch = "Toggle Switch",
}

export interface Dimension {
    width: number;
    depth: number;
    height: number;
}

export interface DisplaysIndicatorsMeter {
    type: string;
    scale: string;
    indication: string;
}

export interface ExternalLink {
    url: string;
    notes: string;
}
